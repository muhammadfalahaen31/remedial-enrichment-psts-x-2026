/**
 * BANK SOAL & DATA REFLEKSI REMEDIAL & ENRICHMENT PSTS GANJIL
 * BAHASA INGGRIS WAJIB KELAS X - SMA PLUS PGRI CIBINONG
 */

const PASSAGES = {
    susi: {
        id: "susi",
        title: "Susi Susanti",
        category: "Descriptive Text (Great Athletes)",
        content: `Susi Susanti is one of the most famous badminton players from Indonesia. She was born in Tasikmalaya, West Java, in 1971. She started playing badminton when she was a child.

Susi was known for her strong skills, discipline, and hard work. She won a gold medal at the 1992 Olympic Games in Barcelona. She was the first Indonesian athlete to win an Olympic gold medal after badminton became an Olympic sport.

Susi retired from professional badminton in 1998. However, she continues to inspire many young Indonesian athletes. Her story teaches us that success needs hard work, discipline, and determination.`
    },
    jonatan: {
        id: "jonatan",
        title: "Jonatan Christie",
        category: "Descriptive Text (Great Athletes)",
        content: `Jonatan Christie is one of Indonesia’s well-known badminton players. He is known not only for his impressive skills on the badminton court but also for his discipline, determination, and positive attitude. He has represented Indonesia in many international badminton competitions.

Jonatan is a tall and athletic player with a strong physical appearance. He has short black hair and an energetic style of playing. On the court, he is fast, powerful, and confident. His ability to move quickly and return difficult shots makes him a challenging opponent. He also has a powerful smash that often surprises his opponents.

One of Jonatan’s most important qualities is his determination. He trains regularly to improve his physical fitness, technique, and mental strength. He does not easily give up when he faces a difficult opponent. Instead, he stays focused and tries to find a way to improve his performance.

Jonatan is also admired for his sportsmanship. He respects his opponents and remains humble when he wins. His achievements and attitude make him a good example for young people. For many Indonesian students, Jonatan Christie is not only a great athlete but also an inspiration to work hard, stay disciplined, and never give up on their dreams.`
    },
    jordan: {
        id: "jordan",
        title: "Michael Jordan: A Basketball Legend",
        category: "Descriptive Text (Great Athletes)",
        content: `Michael Jordan is one of the greatest basketball players in the history of the sport. He was born on February 17, 1963, in Brooklyn, New York, USA. He became famous for his outstanding basketball skills, competitive spirit, and strong determination. He spent most of his professional career playing for the Chicago Bulls in the National Basketball Association (NBA).

Jordan was tall, athletic, and physically strong. He was especially famous for his incredible jumping ability and powerful slam dunks. On the basketball court, he was fast, confident, and skillful. He could score points in many different ways and was also an excellent defender. His ability to perform under pressure made him a difficult player for his opponents to stop.

One of Jordan's most impressive qualities was his determination. He always wanted to improve his performance and did not easily accept defeat. He trained hard and remained focused on his goals. His competitive attitude encouraged his teammates to work harder and give their best during games.

Jordan achieved many important accomplishments during his career. He won six NBA championships with the Chicago Bulls and was named the NBA's Most Valuable Player (MVP) several times. He also helped the United States win Olympic gold medals in basketball.

Michael Jordan is admired not only for his achievements but also for his strong character as an athlete. He was confident when facing challenging opponents and showed strong determination to achieve his goals. His perseverance and grit helped him overcome challenges, learn from failure, and continue improving. At the same time, he demonstrated good sportsmanship by respecting his opponents and teammates. His journey shows that being a great athlete is not just about winning, but also about developing a strong character, facing challenges with courage, and inspiring others.`
    },
    salah: {
        id: "salah",
        title: "Mohamed Salah",
        category: "Descriptive Text (Great Athletes)",
        content: `Mohamed Salah is one of the most famous football players in the world. He was born on June 15, 1992, in Nagrig, a small village in Egypt. As a young boy, Salah loved football more than anything else. He played football every day on the streets and fields near his home. His family was not rich, but his parents supported his dream. He joined a local club and later moved to bigger clubs in Egypt. His talent and hard work finally opened the door for him to play in Europe, first in Switzerland, then in England, Italy, and finally at Liverpool.

Physically, Salah is not very tall, but he is strong, fast, and full of energy. He has curly black hair, brown skin, and a friendly smile that makes people admire him. On the pitch, Salah looks confident and focused. He is famous for his amazing speed, quick dribbling, and powerful shots. He can run very fast while keeping control of the ball, which makes him one of the most dangerous strikers in the world. Many defenders find it almost impossible to stop him when he starts his attack.

At the club level, Salah plays for Liverpool Football Club in the English Premier League. Since joining Liverpool in 2017, he has scored hundreds of goals and broken many records. He helped Liverpool win the UEFA Champions League in 2019 and the Premier League in 2020, after thirty years without the title. He has also won several Golden Boot awards as the top scorer in the league. For his country, Salah is the captain of the Egypt national team. He has led Egypt in the Africa Cup of Nations and played in the FIFA World Cup, becoming a hero for millions of Egyptian fans.

People admire Salah not only because of his skills but also because of his good character. He is humble, polite, and respectful to everyone. Outside football, Salah is very active in charity. He gives money to poor families, builds schools, and supports hospitals in Egypt. His kindness and discipline make him a role model for young players all over the world. Salah shows that with passion, hard work, and determination, a boy from a small village can become one of the greatest football players in history.`
    }
};

const QUESTIONS_DATA = [
    {
        id: 1,
        passageId: "susi",
        question: "What is the text mainly about?",
        options: {
            A: "The history of badminton in Indonesia",
            B: "Susi Susanti's life and achievements",
            C: "The Olympic Games in Barcelona",
            D: "Indonesian athletes in 1998",
            E: "How to become a badminton coach"
        },
        correctAnswer: "B",
        skill: "Main Idea / Topic of Text",
        level: "LOTS",
        explanation: "Teks mendeskripsikan biografi ringkas, perjalanan karier, dan pencapaian luar biasa Susi Susanti sebagai atlet bulu tangkis kebanggaan Indonesia."
    },
    {
        id: 2,
        passageId: "susi",
        question: "What medal did Susi win at the 1992 Olympic Games?",
        options: {
            A: "A silver medal",
            B: "A bronze medal",
            C: "A gold medal",
            D: "Two gold medals",
            E: "A special medal"
        },
        correctAnswer: "C",
        skill: "Specific Detail Retrieval",
        level: "LOTS",
        explanation: "Paragraf 2 secara eksplisit menyatakan: 'She won a gold medal at the 1992 Olympic Games in Barcelona.'"
    },
    {
        id: 3,
        passageId: "susi",
        question: "Why does Susi continue to inspire young athletes?",
        options: {
            A: "She owns a badminton club.",
            B: "She teaches badminton at school.",
            C: "She became an Olympic coach.",
            D: "Her story shows the importance of hard work and determination.",
            E: "She still plays professional badminton."
        },
        correctAnswer: "D",
        skill: "Detail & Cause-Effect",
        level: "MOTS",
        explanation: "Paragraf 3 menyatakan: 'Her story teaches us that success needs hard work, discipline, and determination.'"
    },
    {
        id: 4,
        passageId: "susi",
        question: "The word “retired” in paragraph 3 is closest in meaning to ...",
        options: {
            A: "started playing",
            B: "stopped working professionally",
            C: "won a competition",
            D: "trained harder",
            E: "became famous"
        },
        correctAnswer: "B",
        skill: "Vocabulary in Context (Synonym)",
        level: "MOTS",
        explanation: "'Retired' berarti pensiun / berhenti dari karier profesional ('stopped working professionally')."
    },
    {
        id: 5,
        passageId: null,
        question: "Complete the sentence with the correct verb!\nThe athlete trains every day because she wants to ______ her performance.",
        options: {
            A: "improve",
            B: "destroy",
            C: "forget",
            D: "refuse",
            E: "reduce"
        },
        correctAnswer: "A",
        skill: "Vocabulary / Contextual Verb",
        level: "LOTS",
        explanation: "Tujuan atlet berlatih setiap hari adalah untuk meningkatkan ('improve') performanya."
    },
    {
        id: 6,
        passageId: "susi",
        question: "Which quality is MOST important for an athlete who wants to achieve a long-term goal?",
        options: {
            A: "Expensive equipment",
            B: "Popularity",
            C: "Determination and consistent effort",
            D: "Having many fans",
            E: "Winning every competition"
        },
        correctAnswer: "C",
        skill: "Critical Thinking / Value Inference",
        level: "HOTS",
        explanation: "Kualitas esensial untuk meraih tujuan jangka panjang adalah keteguhan hati dan kerja keras konsisten ('Determination and consistent effort')."
    },
    {
        id: 7,
        passageId: "jonatan",
        question: "What is the main purpose of the text?",
        options: {
            A: "To explain the rules of badminton",
            B: "To describe Jonatan Christie as a successful and inspiring athlete",
            C: "To compare Jonatan Christie with other Indonesian athletes",
            D: "To explain how to become a professional badminton player",
            E: "To describe the history of badminton in Indonesia"
        },
        correctAnswer: "B",
        skill: "Author's Purpose / Communicative Purpose",
        level: "MOTS",
        explanation: "Teks ini bergenre Descriptive Text dengan tujuan mendeskripsikan profil, karakteristik fisik, sikap mental, dan prestasi Jonatan Christie."
    },
    {
        id: 8,
        passageId: "jonatan",
        question: "One of Jonatan’s most important qualities is his determination. (Par. 3)\nThe word “determination” in the sentence is closest in meaning to ...",
        options: {
            A: "the ability to remain focused and keep trying",
            B: "the ability to defeat every opponent",
            C: "the desire to become famous",
            D: "the feeling of being nervous before a match",
            E: "the ability to play badminton very quickly"
        },
        correctAnswer: "A",
        skill: "Vocabulary in Context",
        level: "MOTS",
        explanation: "'Determination' mengacu pada tekad kuat, yaitu kemampuan untuk tetap fokus dan terus berusaha pantang menyerah ('ability to remain focused and keep trying')."
    },
    {
        id: 9,
        passageId: "jonatan",
        question: "What can readers infer about Jonatan from his attitude toward difficult opponents?",
        options: {
            A: "He is easily discouraged by strong opponents.",
            B: "He prefers to avoid challenging matches.",
            C: "He is mentally strong and willing to find solutions to problems.",
            D: "He depends completely on his coach during competitions.",
            E: "He considers winning more important than improving."
        },
        correctAnswer: "C",
        skill: "Reading Inference (HOTS)",
        level: "HOTS",
        explanation: "Paragraf 3 menyatakan bahwa ia tidak mudah menyerah dan terus berusaha mencari solusi untuk meningkatkan performa saat menghadapi lawan tangguh."
    },
    {
        id: 10,
        passageId: "jonatan",
        question: "Why does the writer mention Jonatan's sportsmanship in the final paragraph?",
        options: {
            A: "To show that his success comes only from his physical strength",
            B: "To explain why badminton is popular in Indonesia",
            C: "To emphasize that being a great athlete involves character as well as ability",
            D: "To compare his behavior with that of other badminton players",
            E: "To explain how he prepares for international competitions"
        },
        correctAnswer: "C",
        skill: "Author's Tone & Structure Analysis",
        level: "HOTS",
        explanation: "Penulis menekankan nilai sportivitas dan kerendahan hati untuk menunjukkan bahwa atlet hebat dibentuk oleh perpaduan kemampuan fisik dan karakter mulia."
    },
    {
        id: 11,
        passageId: "jordan",
        question: "Great athletes ______ train to improve their physical and mental abilities.",
        options: {
            A: "regular",
            B: "regularity",
            C: "regularly",
            D: "regulation",
            E: "regulate"
        },
        correctAnswer: "C",
        skill: "Part of Speech (Adverb of Frequency/Manner)",
        level: "LOTS",
        explanation: "Kalimat membutuhkan Adverb (kata keterangan) untuk menerangkan kata kerja 'train'. Bentuk yang tepat adalah 'regularly'."
    },
    {
        id: 12,
        passageId: "jordan",
        question: "Michael Jordan played basketball ______ and became famous for his impressive performances.",
        options: {
            A: "skillful",
            B: "skillfully",
            C: "skill",
            D: "skilled",
            E: "more skill"
        },
        correctAnswer: "B",
        skill: "Part of Speech (Adverb of Manner)",
        level: "LOTS",
        explanation: "Kata yang menerangkan bagaimana Jordan bermain bola basket ('played') adalah Adverb 'skillfully' (dengan terampil)."
    },
    {
        id: 13,
        passageId: "jordan",
        question: "The word “grit” in the final paragraph refers to ...",
        options: {
            A: "physical strength and speed",
            B: "the ability to remain determined despite difficulties",
            C: "the ability to defeat opponents quickly",
            D: "confidence in one's physical appearance",
            E: "a strong desire to become famous"
        },
        correctAnswer: "B",
        skill: "Vocabulary (Character Trait / Grit)",
        level: "MOTS",
        explanation: "'Grit' bermakna ketabahan, kegigihan, dan tekad pantang mundur dalam menghadapi kesulitan ('the ability to remain determined despite difficulties')."
    },
    {
        id: 14,
        passageId: "jordan",
        question: "In the sentence “His ability to perform under pressure made him a difficult player for his opponents to stop,” the word “His” refers to ...",
        options: {
            A: "Michael Jordan's coach",
            B: "Jordan's teammate",
            C: "Michael Jordan",
            D: "Jordan's opponent",
            E: "an NBA player"
        },
        correctAnswer: "C",
        skill: "Pronoun Reference",
        level: "LOTS",
        explanation: "Kata ganti 'His' merujuk secara langsung kepada subjek teks, yaitu Michael Jordan."
    },
    {
        id: 15,
        passageId: "jordan",
        question: "What is the main idea of the text?",
        options: {
            A: "Michael Jordan became famous mainly because of his physical strength.",
            B: "Michael Jordan's career was successful because he played for the Chicago Bulls.",
            C: "Michael Jordan was a great athlete because of his skills, achievements, determination, and strong character.",
            D: "Michael Jordan became the best basketball player by winning Olympic gold medals.",
            E: "Michael Jordan's success depended mainly on his ability to score points."
        },
        correctAnswer: "C",
        skill: "Main Idea Synthesis",
        level: "MOTS",
        explanation: "Ide pokok mencakup keseluruhan teks: keahlian teknis Jordan, capaian gelar juaranya, determinasi, dan karakter kepemimpinannya yang inspiratif."
    },
    {
        id: 16,
        passageId: "jordan",
        question: "Which achievement is NOT mentioned in the text?",
        options: {
            A: "Winning six NBA championships",
            B: "Being named NBA Most Valuable Player",
            C: "Winning Olympic gold medals",
            D: "Playing for the Chicago Bulls",
            E: "Winning an international tennis championship"
        },
        correctAnswer: "E",
        skill: "Negative Detail Retrieval",
        level: "LOTS",
        explanation: "Michael Jordan adalah atlet bola basket; ia tidak pernah menjuarai turnamen tenis internasional."
    },
    {
        id: 17,
        passageId: "jordan",
        question: "According to the text, how did Jordan's competitive attitude influence his teammates?",
        options: {
            A: "It encouraged them to compete against him.",
            B: "It made them depend on him during games.",
            C: "It motivated them to work harder and perform at their best.",
            D: "It encouraged them to become professional basketball players.",
            E: "It made them focus more on individual achievements."
        },
        correctAnswer: "C",
        skill: "Reading Detail & Influence",
        level: "MOTS",
        explanation: "Paragraf 3 menyatakan: 'His competitive attitude encouraged his teammates to work harder and give their best during games.'"
    },
    {
        id: 18,
        passageId: "salah",
        question: "Where was Mohamed Salah born?",
        options: {
            A: "In Cairo, the capital city of Egypt.",
            B: "In Alexandria, a big city near the sea.",
            C: "In Nagrig, a small village in Egypt.",
            D: "In Switzerland, before moving to England.",
            E: "In Liverpool, where he now plays football."
        },
        correctAnswer: "C",
        skill: "Factual Information Retrieval",
        level: "LOTS",
        explanation: "Paragraf 1 menyatakan: 'He was born on June 15, 1992, in Nagrig, a small village in Egypt.'"
    },
    {
        id: 19,
        passageId: "salah",
        question: "What kind of charity work does Salah do in Egypt?",
        options: {
            A: "He builds stadiums, sport facilities and football academies.",
            B: "He supports hospitals, builds schools, and helps poor families.",
            C: "He organizes children music concerts and supports football festivals.",
            D: "He gives money to buy tickets and accommodation for Liverpool fans.",
            E: "He travels abroad as the ambassador to promote tourism in Egypt."
        },
        correctAnswer: "B",
        skill: "Specific Detail",
        level: "LOTS",
        explanation: "Paragraf 4 menyatakan: 'He gives money to poor families, builds schools, and supports hospitals in Egypt.'"
    },
    {
        id: 20,
        passageId: "salah",
        question: "What is the main idea of paragraph 2?",
        options: {
            A: "The paragraph is about Salah’s friendship with his teammates in Liverpool.",
            B: "The paragraph is about Salah’s charity activities and his respect for people.",
            C: "The paragraph is about Salah’s training schedule and eating habits.",
            D: "The paragraph is about Salah’s physical appearance and his football skills.",
            E: "The paragraph is about Salah’s Golden Boot awards and record-breaking goals."
        },
        correctAnswer: "D",
        skill: "Paragraph Main Idea",
        level: "MOTS",
        explanation: "Paragraf 2 berfokus pada ciri fisik Salah (curly black hair, brown skin, not very tall) dan kemampuan sepak bolanya (speed, quick dribbling, powerful shots)."
    },
    {
        id: 21,
        passageId: "salah",
        question: "Which achievement made Salah a hero for his country?",
        options: {
            A: "He helped Egypt qualify for the 2018 World Cup.",
            B: "He signed his first contract with Liverpool in 2017.",
            C: "He scored the opening goal in the Premier League.",
            D: "He received the Golden Boot award several times.",
            E: "He was appointed captain of the Egypt national team."
        },
        correctAnswer: "A",
        skill: "Inference & Contextual Detail",
        level: "MOTS",
        explanation: "Paragraf 3 menyatakan peran kepemimpinannya membawa Mesir di Piala Afrika dan Piala Dunia (FIFA World Cup), menjadikannya pahlawan bagi jutaan penggemar di Mesir."
    },
    {
        id: 22,
        passageId: "salah",
        question: "What is the purpose of the text?",
        options: {
            A: "To tell a funny story about Mohamed Salah’s life in England.",
            B: "To explain football rules and how professional games are played.",
            C: "To persuade young people to become football players like Salah.",
            D: "To advertise football clubs and promote them to many supporters.",
            E: "To describe Mohamed Salah’s background, career, and personality."
        },
        correctAnswer: "E",
        skill: "Communicative Purpose",
        level: "MOTS",
        explanation: "Tujuan teks deskriptif ini adalah menggambarkan latar belakang kehidupan, perjalanan karier gemilang, dan kepribadian terpuji Mohamed Salah."
    },
    {
        id: 23,
        passageId: "salah",
        question: "The word “famous” in the text is closest in meaning to …",
        options: {
            A: "Popular",
            B: "Ordinary",
            C: "Hidden",
            D: "Unknown",
            E: "Forgotten"
        },
        correctAnswer: "A",
        skill: "Vocabulary in Context (Synonym)",
        level: "LOTS",
        explanation: "'Famous' bermakna terkenal / dikenal luas, bersinonim dengan 'Popular'."
    },
    {
        id: 24,
        passageId: null,
        question: "Complete the dialogue below using the correct word!\n\nAndy: Why do you like playing football, Bob?\nBob: I like playing football because it is fun and enjoyable for me.\nAndy: Well, how many times do you practice football in a week?\nBob: I … football twice a week. On Saturday and Wednesday.",
        options: {
            A: "practising",
            B: "practises",
            C: "practise",
            D: "practised",
            E: "will practise"
        },
        correctAnswer: "C",
        skill: "Simple Present Tense (Habitual Action / Subject-Verb Agreement)",
        level: "LOTS",
        explanation: "Subjek 'I' pada kalimat Simple Present Tense untuk kebiasaan ('twice a week') menggunakan kata kerja bentuk dasar (V1) tanpa akhiran -s, yaitu 'practise'."
    },
    {
        id: 25,
        passageId: null,
        question: "Complete the dialogue below using the correct word!\n\nDina: I saw your father in the park yesterday.\nLina: My father always … the park every afternoon actually.\nDina: Oh, I see. He … enjoyed there.",
        options: {
            A: "visit – seem",
            B: "visits – seem",
            C: "visit – seems",
            D: "visits – seems",
            E: "visited – seemed"
        },
        correctAnswer: "D",
        skill: "Simple Present Tense (Third Person Singular -s/-es)",
        level: "MOTS",
        explanation: "Subjek 'My father' (He) dan 'He' adalah orang ketiga tunggal. Dalam Simple Present Tense (ditandai dengan 'always' & 'every afternoon'), kata kerja wajib mendapat akhiran -s, sehingga jawabannya adalah 'visits – seems'."
    }
];

const REFLECTIONS_DATA = [
    {
        id: "ref1",
        title: "Pemahaman Materi & Kosakata (Comprehension & Vocabulary Mastery)",
        question: "Sejauh mana Anda memahami teks deskriptif tentang atlet berprestasi (Susi Susanti, Jonatan Christie, Michael Jordan, Mohamed Salah) serta kosakata deskriptif dan tata bahasa (Simple Present Tense & Adverb) yang digunakan?",
        placeholder: "Jelaskan pemahaman Anda terhadap ciri fisik, watak atlet, dan aturan tata bahasa yang telah dipelajari..."
    },
    {
        id: "ref2",
        title: "Kendala Belajar & Strategi Berpikir Kritis (Learning Obstacles & Critical Thinking)",
        question: "Bagian mana dari soal atau bacaan yang menurut Anda paling menantang (menemukan ide pokok, inferensi karakter/sikap, sinonim kata konteks, atau aturan tata bahasa Simple Present), dan bagaimana strategi Anda menjawabnya?",
        placeholder: "Ceritakan nomor/tipe soal yang paling sulit dan bagaimana langkah Anda mencari jawabannya di dalam teks..."
    },
    {
        id: "ref3",
        title: "Inspirasi Karakter & Motivasi Belajar (Character Values & Motivation)",
        question: "Nilai karakter positif apa (disiplin, keteguhan hati/grit, sportivitas, kerendahan hati/kedermawanan) dari para atlet hebat tersebut yang paling menginspirasi Anda dalam kehidupan sehari-hari dan proses belajar?",
        placeholder: "Tuliskan refleksi nilai kepribadian atlet yang ingin Anda terapkan dalam meraih cita-cita..."
    }
];

const CLASS_OPTIONS = [
    "X INT 1", "X INT 2", "X INT 3", "X INT 4",
    "X REGULER 1", "X REGULER 2", "X REGULER 3", "X REGULER 4", "X REGULER 5", "X REGULER 6", "X REGULER 7"
];
