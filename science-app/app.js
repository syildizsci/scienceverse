// ===== Socratic Science Assistant with Gemini AI =====
// This AI uses Google Gemini to ask guiding questions!

const GEMINI_API_KEY = "AIzaSyBBAenzK-yHWtVF29VrWnrXXfsd0MpSzag";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// System prompt for Socratic teaching
const SYSTEM_PROMPT = `You are a Socratic science tutor for children aged 8-14.

CRITICAL RULES:
1. NEVER explain or give answers directly
2. ALWAYS ask a RELEVANT follow-up question about EXACTLY what the child asked
3. Your question must DIRECTLY relate to their question - stay on topic!
4. Keep responses SHORT (1-2 sentences max)
5. Use simple language and 1-2 emojis
6. Guide them to discover the answer step by step

IMPORTANT: Your question must be DIRECTLY about what they asked, not a random science question!

Examples:

Child: "Why is the sun active during the day?"
BAD: "Why do stars look tiny?" (unrelated!)
GOOD: "🌞 Interesting! Is the sun only there during the day, or is it always there? What do you think happens to it at night?"

Child: "Why is the sky blue?"
BAD: "What do you know about planets?" (unrelated!)  
GOOD: "🤔 Good question! What other colors do you see in the sky? When does the sky look different colors?"

Child: "How do plants grow?"
GOOD: "🌱 Great question! What do you think plants need to grow? Have you ever tried growing one?"

Child: "What are atoms?"
GOOD: "⚛️ Curious mind! Everything around you is made of tiny pieces. What's the smallest thing you can see with your eyes?"

Stay focused on THEIR question and guide them to the answer!`;

// Call Gemini API
async function callGemini(userMessage, conversationHistory = []) {
    try {
        const messages = [
            { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
            { role: "model", parts: [{ text: "I understand! I will be a Socratic tutor and only ask guiding questions to help children discover science themselves. I won't explain directly." }] },
            ...conversationHistory,
            { role: "user", parts: [{ text: userMessage }] }
        ];

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: messages,
                generationConfig: {
                    temperature: 0.8,
                    maxOutputTokens: 150
                }
            })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        }
        
        return null;
    } catch (error) {
        console.error("Gemini API error:", error);
        return null;
    }
}

// Conversation history for context
let conversationHistory = [];

// Socratic questions for each topic
const socraticQuestions = {
    "space": [
        "🌞 Let's think together! What do you see in the sky during the day?",
        "🤔 If the Sun is a star, why do other stars look so tiny at night?",
        "🌍 Why do you think we have day and night? What's moving?",
        "🚀 If you could visit any planet, which one would you choose? Why?",
        "⭐ How many planets can you name? Let's count together!",
        "🌙 Why does the Moon look different on different nights?"
    ],
    "gravity": [
        "🍎 When you drop something, what happens? Why doesn't it float away?",
        "🌙 Astronauts float in space! Why don't we float here on Earth?",
        "⚽ If you throw a ball up, what happens? Why does it come back?",
        "🤔 Do you think a feather and a rock fall at the same speed? Why?",
        "🌍 What would happen if there was no gravity? What would your day be like?",
        "🎈 Why do helium balloons float up but regular balloons fall down?"
    ],
    "body": [
        "🔬 Your body is made of tiny pieces called cells. How tiny do you think they are?",
        "🤔 Cells need energy to work. Where do YOU get your energy from?",
        "🧠 Your brain is made of cells too! What do you think brain cells do?",
        "💪 Why do you think your muscles get tired when you exercise?",
        "❤️ Can you feel your heart beating? Why do you think it never stops?",
        "🦴 What do you think is inside your bones?"
    ],
    "plants": [
        "🌱 Plants make their own food! How do you think they do it without a mouth?",
        "☀️ Why do plants need sunlight? What happens if you put a plant in the dark?",
        "🌿 Why are most plants green? What do you think makes that color?",
        "💧 What happens to a plant if you forget to water it? Why?",
        "🌳 How do you think a tiny seed becomes a huge tree?",
        "🍃 Why do leaves fall off trees in autumn?"
    ],
    "water": [
        "💧 Where does rain come from? Where do clouds get their water?",
        "☀️ What happens to a puddle on a sunny day? Where does the water go?",
        "🤔 Is the water you drink today new, or has it been around before?",
        "❄️ Why does water turn into ice when it's cold?",
        "🌊 Where do rivers go? Do they ever run out of water?",
        "☁️ What do you think clouds are made of?"
    ],
    "atoms": [
        "🔍 Everything is made of tiny things called atoms! What do you think atoms are made of?",
        "🤔 Can you see atoms? Why or why not?",
        "💨 Is air made of atoms too? How do you know air exists if you can't see it?",
        "🧊 Ice and water are both made of the same atoms. What's different about them?",
        "✨ What do you think is smaller - an atom or a grain of sand?",
        "🎈 Why do you think some things are hard and some are soft?"
    ]
};

// Turkish versions
const socraticQuestionsTR = {
    "space": [
        "🌞 Birlikte düşünelim! Gündüz gökyüzünde ne görüyorsun?",
        "🤔 Güneş bir yıldızsa, diğer yıldızlar gece neden çok küçük görünüyor?",
        "🌍 Sence gece ve gündüz neden oluyor? Ne hareket ediyor?",
        "🚀 Herhangi bir gezegene gidebilsen hangisine giderdin? Neden?",
        "⭐ Kaç gezegen sayabilirsin? Birlikte sayalım!",
        "🌙 Ay neden her gece farklı görünüyor?"
    ],
    "gravity": [
        "🍎 Bir şeyi bıraktığında ne oluyor? Neden havada kalmıyor?",
        "🌙 Astronotlar uzayda süzülüyor! Biz neden süzülmüyoruz?",
        "⚽ Bir topu yukarı atarsan ne olur? Neden geri düşüyor?",
        "🤔 Sence bir tüy ve bir taş aynı hızda mı düşer? Neden?",
        "🌍 Yerçekimi olmasaydı ne olurdu? Günün nasıl geçerdi?",
        "🎈 Helyum balonları neden uçuyor ama normal balonlar düşüyor?"
    ],
    "body": [
        "🔬 Vücudun hücre denen küçük parçalardan oluşuyor. Sence ne kadar küçükler?",
        "🤔 Hücreler çalışmak için enerji gerekir. SEN enerjini nereden alıyorsun?",
        "🧠 Beynin de hücrelerden oluşuyor! Beyin hücreleri sence ne yapıyor?",
        "💪 Egzersiz yapınca kasların neden yoruluyor sence?",
        "❤️ Kalbinin attığını hissedebiliyor musun? Neden hiç durmuyor?",
        "🦴 Kemiklerinin içinde ne var sence?"
    ],
    "plants": [
        "🌱 Bitkiler kendi yemeklerini yapıyor! Ağızları olmadan nasıl yapıyorlar sence?",
        "☀️ Bitkiler neden güneş ışığına ihtiyaç duyar? Karanlıkta ne olur?",
        "🌿 Bitkilerin çoğu neden yeşil? Bu rengi ne yapıyor sence?",
        "💧 Bir bitkiyi sulamayı unutursan ne olur? Neden?",
        "🌳 Küçücük bir tohum nasıl kocaman bir ağaç oluyor sence?",
        "🍃 Sonbaharda yapraklar neden dökülüyor?"
    ],
    "water": [
        "💧 Yağmur nereden geliyor? Bulutlar suyunu nereden alıyor?",
        "☀️ Güneşli bir günde su birikintisine ne olur? Su nereye gidiyor?",
        "🤔 Bugün içtiğin su yeni mi, yoksa daha önce var mıydı?",
        "❄️ Su soğuyunca neden buza dönüşüyor?",
        "🌊 Nehirler nereye gidiyor? Suları hiç bitiyor mu?",
        "☁️ Bulutlar sence neden oluşuyor?"
    ],
    "atoms": [
        "🔍 Her şey atom denen küçük parçalardan oluşuyor! Atomlar neden oluşuyor sence?",
        "🤔 Atomları görebilir misin? Neden?",
        "💨 Hava da atomlardan mı oluşuyor? Havayı göremiyorsan var olduğunu nasıl biliyorsun?",
        "🧊 Buz ve su aynı atomlardan oluşuyor. Farkları ne peki?",
        "✨ Hangisi daha küçük sence - bir atom mu, bir kum tanesi mi?",
        "🎈 Bazı şeyler neden sert, bazıları yumuşak sence?"
    ]
};

// Keywords that trigger each topic
const topicKeywords = {
    "space": ["space", "planet", "planets", "sun", "moon", "star", "stars", "earth", "mars", "jupiter", "saturn", "solar", "galaxy", "universe", "rocket", "astronaut", "uzay", "gezegen", "güneş", "ay", "yıldız", "dünya", "evren"],
    "gravity": ["gravity", "fall", "falls", "falling", "drop", "float", "weight", "heavy", "light", "newton", "yerçekimi", "düşmek", "düşer", "ağırlık", "hafif", "ağır"],
    "body": ["body", "cell", "cells", "organ", "heart", "brain", "blood", "bone", "muscle", "dna", "gene", "vücut", "hücre", "organ", "kalp", "beyin", "kan", "kemik", "kas"],
    "plants": ["plant", "plants", "tree", "leaf", "flower", "seed", "grow", "root", "photosynthesis", "green", "bitki", "ağaç", "yaprak", "çiçek", "tohum", "büyümek", "kök", "fotosentez", "yeşil"],
    "water": ["water", "rain", "cloud", "river", "ocean", "sea", "ice", "snow", "evaporation", "cycle", "su", "yağmur", "bulut", "nehir", "okyanus", "deniz", "buz", "kar"],
    "atoms": ["atom", "atoms", "molecule", "matter", "element", "proton", "electron", "chemistry", "atom", "molekül", "madde", "element", "kimya"]
};

// Detect language
function detectLanguage(text) {
    const turkishPattern = /[çğıöşüÇĞİÖŞÜ]|(\b(merhaba|neden|nasıl|nedir|sence|bir|bu|ne|için|ile|var|yok|evet|hayır)\b)/i;
    return turkishPattern.test(text) ? 'tr' : 'en';
}

// Find topic from user's message
function findTopic(message) {
    const lower = message.toLowerCase();
    for (const [topic, keywords] of Object.entries(topicKeywords)) {
        for (const keyword of keywords) {
            if (lower.includes(keyword)) {
                return topic;
            }
        }
    }
    return null;
}

// Get a random Socratic question for a topic
function getSocraticQuestion(topic, lang) {
    const questions = lang === 'tr' ? socraticQuestionsTR[topic] : socraticQuestions[topic];
    if (!questions) return null;
    return questions[Math.floor(Math.random() * questions.length)];
}

// Encouraging responses for when child answers
const encouragements = {
    en: [
        "🌟 <strong>Great thinking!</strong> I love how you're figuring this out!",
        "💡 <strong>Interesting idea!</strong> You're on the right track!",
        "🧠 <strong>Wow!</strong> You're really using your brain!",
        "👏 <strong>Nice!</strong> That's a smart observation!",
        "🎯 <strong>Good thinking!</strong> Let's explore more!"
    ],
    tr: [
        "🌟 <strong>Harika düşünce!</strong> Bunu çözmeye çalışman süper!",
        "💡 <strong>İlginç fikir!</strong> Doğru yoldasın!",
        "🧠 <strong>Vay!</strong> Beynini gerçekten kullanıyorsun!",
        "👏 <strong>Güzel!</strong> Bu akıllıca bir gözlem!",
        "🎯 <strong>İyi düşünüyorsun!</strong> Hadi daha fazla keşfedelim!"
    ]
};

// Track conversation state
let currentTopic = null;
let lastQuestion = null;
let awaitingResponse = false;

// Follow-up questions based on child's answer
const followUpQuestions = {
    // When child answers about what they see in the sky
    "sky_answer": {
        en: {
            "sun": "☀️ Yes, the Sun! It's actually a giant ball of fire. Why do you think it feels warm when you stand in sunlight?",
            "blue": "💙 Yes, the sky looks blue! But wait... why do you think the sky is blue and not green or red?",
            "clouds": "☁️ Good observation! Clouds! What do you think clouds are made of?",
            "birds": "🐦 Yes, birds fly in the sky! How do you think birds can fly but we can't?",
            "default": "👀 Interesting! And what color is the sky during the day? Why do you think it's that color?"
        },
        tr: {
            "güneş": "☀️ Evet, Güneş! Aslında dev bir ateş topu. Güneş ışığında durduğunda neden sıcak hissediyorsun sence?",
            "mavi": "💙 Evet, gökyüzü mavi görünüyor! Ama neden mavi sence? Neden yeşil veya kırmızı değil?",
            "bulut": "☁️ Güzel gözlem! Bulutlar! Sence bulutlar neden oluşuyor?",
            "kuş": "🐦 Evet, kuşlar gökyüzünde uçuyor! Kuşlar nasıl uçabiliyor ama biz uçamıyoruz sence?",
            "default": "👀 İlginç! Peki gündüz gökyüzü ne renk? Sence neden o renk?"
        }
    },
    // When child answers about falling objects
    "fall_answer": {
        en: {
            "ground": "⬇️ Right, it hits the ground! But WHY does it fall down instead of floating or going up?",
            "down": "⬇️ Yes, down! But why always DOWN? Why not sideways or up?",
            "gravity": "🎯 Wow, you know about gravity! What do you think gravity actually IS?",
            "default": "🤔 Good! So things fall down... but why? What force is pulling them?"
        },
        tr: {
            "yere": "⬇️ Doğru, yere düşüyor! Ama NEDEN aşağı düşüyor? Neden havada kalmıyor?",
            "aşağı": "⬇️ Evet, aşağı! Ama neden hep AŞAĞI? Neden yukarı veya yana gitmiyor?",
            "yerçekimi": "🎯 Vay, yerçekimini biliyorsun! Sence yerçekimi tam olarak NE?",
            "default": "🤔 Güzel! Yani şeyler aşağı düşüyor... ama neden? Onları hangi kuvvet çekiyor?"
        }
    },
    // When child answers about energy source
    "energy_answer": {
        en: {
            "food": "🍎 Exactly! Food gives us energy! But how does the food BECOME energy inside your body?",
            "eat": "🍽️ Yes, by eating! But what happens to the food after you swallow it?",
            "sleep": "😴 Sleep helps us rest! But where does the actual ENERGY come from to move and think?",
            "default": "🤔 Think about it... when you're hungry, you feel tired. What gives you energy to run and play?"
        },
        tr: {
            "yemek": "🍎 Kesinlikle! Yemek bize enerji veriyor! Ama yemek vücudunda nasıl ENERJİYE dönüşüyor?",
            "yiyecek": "🍽️ Evet, yiyerek! Ama yuttuğun yemeğe ne oluyor sonra?",
            "uyku": "😴 Uyku dinlenmemize yardımcı oluyor! Ama hareket etmek için gerçek ENERJİ nereden geliyor?",
            "default": "🤔 Düşün... açken yorgun hissedersin. Koşmak ve oynamak için enerjiyi ne veriyor?"
        }
    },
    // Generic follow-ups for any topic
    "generic": {
        en: [
            "🤔 Interesting answer! Can you tell me more about why you think that?",
            "💡 Good thinking! What made you say that?",
            "🧠 I like how you're thinking! What else do you know about this?",
            "👏 Nice! And what do you think happens next?"
        ],
        tr: [
            "🤔 İlginç cevap! Neden böyle düşündüğünü anlatır mısın?",
            "💡 Güzel düşünce! Bunu neden söyledin?",
            "🧠 Düşünme şeklini beğendim! Bu konuda başka ne biliyorsun?",
            "👏 Güzel! Sence sonra ne oluyor?"
        ]
    }
};

// Determine what type of question was asked
function getQuestionType(questionText) {
    const lower = questionText.toLowerCase();
    if (lower.includes("sky") || lower.includes("gökyüzü")) return "sky_answer";
    if (lower.includes("drop") || lower.includes("fall") || lower.includes("bırak") || lower.includes("düş")) return "fall_answer";
    if (lower.includes("energy") || lower.includes("enerji")) return "energy_answer";
    return "generic";
}

// Get contextual follow-up based on child's answer
function getFollowUp(childAnswer, lang) {
    if (!lastQuestion) return null;
    
    const questionType = getQuestionType(lastQuestion);
    const lower = childAnswer.toLowerCase();
    
    if (questionType === "generic") {
        const responses = followUpQuestions.generic[lang];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    const followUps = followUpQuestions[questionType]?.[lang];
    if (!followUps) return null;
    
    // Check if child's answer matches any keyword
    for (const [keyword, response] of Object.entries(followUps)) {
        if (keyword !== "default" && lower.includes(keyword)) {
            return response;
        }
    }
    
    return followUps.default || null;
}

// Main function to find answer
function findBestAnswer(question) {
    const lang = detectLanguage(question);
    const lower = question.toLowerCase();
    
    // If we're waiting for child's response to a question
    if (awaitingResponse && currentTopic) {
        const followUp = getFollowUp(question, lang);
        
        if (followUp) {
            lastQuestion = followUp;
            return followUp;
        }
        
        // If no specific follow-up, use encouragement + related question
        const encouragement = encouragements[lang][Math.floor(Math.random() * encouragements.length)];
        const nextQuestion = getSocraticQuestion(currentTopic, lang);
        lastQuestion = nextQuestion;
        return encouragement + "<br><br>" + nextQuestion;
    }
    
    // Check for greetings
    if (lower.match(/^(hi|hello|hey|merhaba|selam)/)) {
        const greeting = lang === 'tr' 
            ? "👋 Merhaba! Ben ScienceVerse AI!<br><br>Birlikte bilim keşfedelim! Ne hakkında merak ediyorsun?<br>• Uzay 🚀<br>• Yerçekimi 🍎<br>• Vücudumuz 🧬<br>• Bitkiler 🌱"
            : "👋 Hello! I'm ScienceVerse AI!<br><br>Let's discover science together! What are you curious about?<br>• Space 🚀<br>• Gravity 🍎<br>• Our body 🧬<br>• Plants 🌱";
        return greeting;
    }
    
    // Find topic and ask Socratic question
    const topic = findTopic(question);
    
    if (topic) {
        currentTopic = topic;
        awaitingResponse = true;
        const q = getSocraticQuestion(topic, lang);
        lastQuestion = q;
        return q;
    }
    
    // Default: encourage them to pick a topic
    const defaultResponse = lang === 'tr'
        ? "🤔 İlginç! Birlikte düşünelim...<br><br>Ne hakkında konuşmak istersin?<br>• Uzay ve gezegenler 🚀<br>• Yerçekimi 🍎<br>• Vücudumuz 🧬<br>• Bitkiler 🌱<br>• Su döngüsü 💧<br>• Atomlar ⚛️"
        : "🤔 Interesting! Let's think together...<br><br>What would you like to explore?<br>• Space and planets 🚀<br>• Gravity 🍎<br>• Our body 🧬<br>• Plants 🌱<br>• Water cycle 💧<br>• Atoms ⚛️";
    
    return defaultResponse;
}

// ===== Chat Functions =====
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    showTyping();
    
    // Try Gemini API first
    const geminiResponse = await callGemini(message, conversationHistory);
    
    removeTyping();
    
    if (geminiResponse) {
        // Add to conversation history for context
        conversationHistory.push({ role: "user", parts: [{ text: message }] });
        conversationHistory.push({ role: "model", parts: [{ text: geminiResponse }] });
        
        // Keep only last 10 messages for context
        if (conversationHistory.length > 10) {
            conversationHistory = conversationHistory.slice(-10);
        }
        
        addMessage(geminiResponse, 'bot');
    } else {
        // Fallback to local responses if API fails
        const response = findBestAnswer(message);
        addMessage(response, 'bot');
    }
}

function addMessage(content, type) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.innerHTML = `
        <div class="message-avatar">${type === 'bot' ? '🤖' : '👤'}</div>
        <div class="message-content">
            <div class="message-bubble">${content}</div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showTyping() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.id = 'typingIndicator';
    div.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="message-bubble">
                <div class="typing-indicator"><span></span><span></span><span></span></div>
            </div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') sendMessage();
}

function askSuggestion(question) {
    document.getElementById('chatInput').value = question;
    sendMessage();
}

// ===== Navigation =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            link.classList.add('active');
        });
    });
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            document.querySelector(`[data-section="${section}"]`).classList.add('active');
        });
    });
});

// ===== Curriculum Navigation Functions =====
function toggleAllGrades() {
    const container = document.getElementById('all-grades');
    const expandIcon = document.getElementById('main-grade-expand');
    
    if (container) {
        const computedStyle = window.getComputedStyle(container);
        const isHidden = container.style.display === 'none' || computedStyle.display === 'none';
        
        container.style.display = isHidden ? 'block' : 'none';
        
        if (expandIcon) {
            expandIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function toggleGradeContent(gradeId) {
    const gradeEl = document.getElementById(gradeId);
    if (gradeEl) {
        // Get computed style to check actual display value
        const computedStyle = window.getComputedStyle(gradeEl);
        const isHidden = gradeEl.style.display === 'none' || computedStyle.display === 'none';
        
        gradeEl.style.display = isHidden ? 'block' : 'none';
        
        // Update button active state
        const parentBtn = gradeEl.previousElementSibling;
        if (parentBtn && parentBtn.classList.contains('grade-btn')) {
            if (isHidden) {
                parentBtn.classList.add('active');
            } else {
                parentBtn.classList.remove('active');
            }
            // Rotate expand icon
            const expandIcon = parentBtn.querySelector('.expand-icon');
            if (expandIcon) {
                expandIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }
    }
}

function toggleGrade(gradeId) {
    toggleGradeContent(gradeId);
}

function toggleLessonGroup(groupId) {
    const group = document.getElementById(groupId);
    if (group) {
        const computedStyle = window.getComputedStyle(group);
        const isHidden = group.style.display === 'none' || computedStyle.display === 'none';
        
        group.style.display = isHidden ? 'block' : 'none';
        
        // Update parent button active state
        const parentBtn = group.previousElementSibling;
        if (parentBtn && parentBtn.classList.contains('parent')) {
            parentBtn.classList.toggle('active', isHidden);
            // Rotate expand icon
            const expandIcon = parentBtn.querySelector('.expand-icon');
            if (expandIcon) {
                expandIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }
    }
}

function showLesson(lessonId) {
    // Hide all lesson plans including welcome
    document.querySelectorAll('.lesson-plan').forEach(plan => {
        plan.classList.remove('active');
    });
    
    // Show selected lesson
    const selectedLesson = document.getElementById('lesson-' + lessonId);
    if (selectedLesson) {
        selectedLesson.classList.add('active');
    }
    
    // Update week buttons active state
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const clickedBtn = document.querySelector(`.week-btn[onclick="showLesson('${lessonId}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
}

// ===== Simple Physics Calculator =====
function calculateOhm() {
    const V = parseFloat(document.getElementById('voltage').value);
    const I = parseFloat(document.getElementById('current').value);
    const R = parseFloat(document.getElementById('resistance').value);
    const result = document.getElementById('ohmResult');
    
    if (!isNaN(V) && !isNaN(I)) {
        result.innerHTML = `<strong>Resistance:</strong> ${(V/I).toFixed(2)} Ω`;
    } else if (!isNaN(V) && !isNaN(R)) {
        result.innerHTML = `<strong>Current:</strong> ${(V/R).toFixed(4)} A`;
    } else if (!isNaN(I) && !isNaN(R)) {
        result.innerHTML = `<strong>Voltage:</strong> ${(I*R).toFixed(2)} V`;
    } else {
        result.innerHTML = 'Enter any 2 values to calculate the third.';
    }
}

