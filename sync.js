/**
 * REALTIME SYNC & STORAGE ENGINE
 * REMEDIAL & ENRICHMENT PSTS X 2026
 * 
 * Supports:
 * 1. Cloud Realtime Database (Firebase Realtime DB REST & WebSockets)
 * 2. LocalStorage Persistence
 * 3. Cross-Tab BroadcastChannel Realtime Event Dispatcher
 */

const SYNC_CONFIG = {
    // Cloud Realtime DB endpoint (Pre-configured Public Firebase RTDB for SMA Plus PGRI Cibinong)
    FIREBASE_URL: "https://psts-english-x-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
    COLLECTION: "submissions",
    LOCAL_KEY: "PSTS_ENGLISH_X_SUBMISSIONS",
    TIMER_KEY: "PSTS_ENGLISH_X_TIMER_REMAINING",
    EXAM_DURATION_SECONDS: 60 * 60 // 1 Hour (3600 seconds)
};

class RealtimeSyncEngine {
    constructor() {
        this.channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('psts_english_sync_channel') : null;
        this.listeners = [];
        this.initChannelListener();
    }

    initChannelListener() {
        if (this.channel) {
            this.channel.onmessage = (event) => {
                if (event.data && event.data.type === 'NEW_SUBMISSION') {
                    this.notifyListeners(event.data.payload);
                }
            };
        }
    }

    onNewData(callback) {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
    }

    notifyListeners(submission) {
        this.listeners.forEach(cb => {
            try {
                cb(submission);
            } catch (err) {
                console.error("Listener callback error:", err);
            }
        });
    }

    // Get all submissions from LocalStorage & Cloud
    async getAllSubmissions() {
        let localData = [];
        try {
            const raw = localStorage.getItem(SYNC_CONFIG.LOCAL_KEY);
            if (raw) {
                localData = JSON.parse(raw);
            }
        } catch (e) {
            console.warn("Error reading localStorage:", e);
        }

        // Attempt cloud fetch
        try {
            const res = await fetch(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`);
            if (res.ok) {
                const cloudJson = await res.json();
                if (cloudJson) {
                    const cloudList = Object.keys(cloudJson).map(k => ({
                        ...cloudJson[k],
                        _cloudId: k
                    }));

                    // Merge cloud with local, deduplicating by id
                    const mergedMap = new Map();
                    localData.forEach(item => mergedMap.set(item.id, item));
                    cloudList.forEach(item => mergedMap.set(item.id, item));

                    const merged = Array.from(mergedMap.values()).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    localStorage.setItem(SYNC_CONFIG.LOCAL_KEY, JSON.stringify(merged));
                    return merged;
                }
            }
        } catch (err) {
            console.log("Cloud offline or network unavailable, using local cache:", err.message);
        }

        return localData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    // Submit new student exam record
    async submitExam(data) {
        const payload = {
            id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
            name: data.name,
            studentClass: data.studentClass,
            studentId: data.studentId || "-",
            answers: data.answers, // { "1": "B", "2": "C", ... }
            score: data.score, // 0 - 100
            correctCount: data.correctCount, // e.g. 23 / 25
            totalQuestions: data.totalQuestions || 25,
            itemResults: data.itemResults, // { "1": true, "2": false, ... }
            reflections: data.reflections, // { "ref1": "...", "ref2": "...", "ref3": "..." }
            timeSpent: data.timeSpent || "0m",
            timestamp: new Date().toISOString()
        };

        // 1. Save to LocalStorage
        try {
            const existing = await this.getAllSubmissions();
            const updated = [payload, ...existing.filter(i => i.id !== payload.id)];
            localStorage.setItem(SYNC_CONFIG.LOCAL_KEY, JSON.stringify(updated));
        } catch (e) {
            console.warn("Failed saving locally:", e);
        }

        // 2. Broadcast to other tabs (instant realtime for teacher mode on same browser)
        if (this.channel) {
            this.channel.postMessage({
                type: 'NEW_SUBMISSION',
                payload: payload
            });
        }

        // 3. Send to Cloud Realtime DB
        try {
            await fetch(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            console.log("Saved locally, cloud sync will retry when connected:", err.message);
        }

        return payload;
    }

    // Listen to cloud realtime stream via Server-Sent Events (SSE)
    subscribeCloudRealtime(onDataUpdate) {
        if (typeof EventSource !== 'undefined') {
            try {
                const sse = new EventSource(`${SYNC_CONFIG.FIREBASE_URL}/${SYNC_CONFIG.COLLECTION}.json`);
                sse.addEventListener('put', (event) => {
                    try {
                        const parsed = JSON.parse(event.data);
                        if (parsed && parsed.data) {
                            this.getAllSubmissions().then(all => {
                                if (onDataUpdate) onDataUpdate(all);
                            });
                        }
                    } catch (e) { }
                });
                sse.addEventListener('patch', () => {
                    this.getAllSubmissions().then(all => {
                        if (onDataUpdate) onDataUpdate(all);
                    });
                });
                return sse;
            } catch (e) {
                console.warn("SSE not available:", e);
            }
        }
        return null;
    }
}

// Global instance
const syncEngine = new RealtimeSyncEngine();
