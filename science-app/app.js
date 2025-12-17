// ===== Socratic Science Assistant with ChatGPT =====
// This AI uses OpenAI ChatGPT to ask guiding questions!

const OPENAI_API_KEY = "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";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// System prompt for Socratic teaching
const SYSTEM_PROMPT = `You are a Socratic science tutor for kids.

YOUR JOB: Ask questions about the SPECIFIC TOPIC the child mentioned.

FORBIDDEN RESPONSES (never say these):
- "What made you say that?"
- "What do you think happens next?"
- "Tell me more"
- "Why do you think so?"
- Any generic question that could apply to anything

GOOD RESPONSES (always specific to their topic):
- For water: "Where do you see water at home?"
- For sun: "Is the sun warm or cold?"
- For plants: "What color are most plants?"

FORMAT: "😊 Great question! Let's think... [SPECIFIC question about THEIR topic]"

EXAMPLES:

Child: "What is water?"
WRONG: "What made you say that?" (FORBIDDEN - too generic!)
CORRECT: "😊 Great question! Let's think... Where do you see water at home? In your glass, in the sink?"

Child: "I saw different kinds of water today"
WRONG: "What happens next?" (FORBIDDEN - generic!)
CORRECT: "😊 Interesting! Let's think... What did the different water look like? Was some clear and some not?"

Child: "What is the sun?"
CORRECT: "😊 Great question! Let's think... What do you feel when you stand outside on a sunny day?"

ALWAYS ask about the SPECIFIC thing they mentioned. Never be generic.`;

// Call ChatGPT API
async function callGemini(userMessage, conversationHistory = []) {
    try {
        // Convert conversation history to OpenAI format
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...conversationHistory.map(msg => ({
                role: msg.role === "model" ? "assistant" : "user",
                content: msg.parts ? msg.parts[0].text : msg.content
            })),
            { role: "user", content: userMessage }
        ];

        const response = await fetch(OPENAI_API_URL, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: messages,
                temperature: 0.8,
                max_tokens: 150
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0]?.message?.content) {
            return data.choices[0].message.content;
        }
        
        console.error("OpenAI API response:", data);
        return null;
    } catch (error) {
        console.error("ChatGPT API error:", error);
        return null;
    }
}

// Conversation history for context
let conversationHistory = [];

// Socratic questions for each topic - format: acknowledge + think together + related question
const socraticQuestions = {
    "space": [
        "😊 Hmm, great question! Let's think together... The sky is blue during the day, but what color is it at sunset? Why do you think it changes?",
        "✨ Ooh, interesting! Let's figure this out... If the Sun is a star, why do you think other stars look so tiny at night?",
        "🌍 Great curiosity! Let's explore... Why do you think we have day and night? What might be moving?",
        "🌙 Hmm, good thinking! Let's discover... Why does the Moon look different shapes on different nights?"
    ],
    "gravity": [
        "🍎 Hmm, great question! Let's think... When you drop something, what happens to it? Why doesn't it float away?",
        "🤔 Ooh, interesting! Let's figure this out... If you throw a ball up, what happens? Why does it come back down?",
        "🌙 Great curiosity! Let's explore... Astronauts float in space, but why don't we float here on Earth?",
        "🎈 Hmm, good thinking! Let's discover... Why do helium balloons go up but regular balloons fall down?"
    ],
    "body": [
        "🔬 Hmm, great question! Let's think... Your body is made of tiny pieces called cells. How tiny do you think they are?",
        "🤔 Ooh, interesting! Let's figure this out... Where do YOU get your energy from? What gives your body power?",
        "🧠 Great curiosity! Let's explore... Your brain controls everything! What do you think happens inside your brain when you think?",
        "❤️ Hmm, good thinking! Let's discover... Can you feel your heart beating? Why do you think it never stops?"
    ],
    "plants": [
        "🌱 Hmm, great question! Let's think... Plants make their own food, but they don't have mouths! What do you think they use instead?",
        "☀️ Ooh, interesting! Let's figure this out... Why do plants need sunlight? What happens if you put a plant in the dark?",
        "🌿 Great curiosity! Let's explore... Most plants are green. What do you think makes them that color?",
        "🌳 Hmm, good thinking! Let's discover... How does a tiny seed become a huge tree? What might be inside it?"
    ],
    "water": [
        "😊 Great question! Let's think... Where do you see water every day? In your glass, in the sink?",
        "😊 Interesting! Let's think... What does water feel like when you touch it? Is it hard or soft?",
        "😊 Good question! Let's think... What color is water? Can you see through it?",
        "😊 Nice curiosity! Let's think... What can you do with water? Can you drink it, swim in it?"
    ],
    "atoms": [
        "🔍 Hmm, great question! Let's think... Everything is made of tiny things called atoms! What do you think atoms look like?",
        "💨 Ooh, interesting! Let's figure this out... Is air made of atoms too? If you can't see air, how do you know it exists?",
        "🧊 Great curiosity! Let's explore... Ice and water are made of the same atoms. So what's different about them?",
        "✨ Hmm, good thinking! Let's discover... What do you think is smaller - an atom or a grain of sand?"
    ],
    "light": [
        "😊 Hmm, great question! Let's think together... The sky is blue during the day, but what color is it at sunset? Why do you think it changes?",
        "🌈 Ooh, interesting! Let's figure this out... What colors do you see in a rainbow? Where do you think those colors come from?",
        "💡 Great curiosity! Let's explore... Can you see light itself, or do you only see things that light touches?",
        "🌅 Hmm, good thinking! Let's discover... Why do you think the sun looks red or orange when it's setting?"
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
    ],
    "light": [
        "🌈 Gökkuşağında hangi renkleri görüyorsun? Bu renkler nereden geliyor sence?",
        "🤔 Gökyüzü gündüz mavi, ama gün batımında ne renk? Neden değişiyor sence?",
        "💡 Işığın kendisini görebilir misin, yoksa sadece ışığın dokunduğu şeyleri mi görürsün?",
        "🔦 Işığa yaklaştığında gölgen ne olur? Neden?",
        "👀 Gözlerin şeyleri nasıl görüyor? Neye ihtiyaçları var?",
        "🌅 Güneş batarken neden kırmızı veya turuncu görünüyor sence?"
    ]
};

// Keywords that trigger each topic
const topicKeywords = {
    "light": ["light", "color", "colors", "colour", "colours", "rainbow", "shadow", "see", "eyes", "sky", "blue", "red", "sunset", "sunrise", "ışık", "renk", "gökkuşağı", "gölge", "görmek", "göz", "gökyüzü", "mavi", "kırmızı", "gün batımı"],
    "space": ["space", "planet", "planets", "sun", "moon", "star", "stars", "earth", "mars", "jupiter", "saturn", "solar", "galaxy", "universe", "rocket", "astronaut", "night", "uzay", "gezegen", "güneş", "ay", "yıldız", "dünya", "evren", "gece"],
    "gravity": ["gravity", "fall", "falls", "falling", "drop", "float", "weight", "heavy", "newton", "yerçekimi", "düşmek", "düşer", "ağırlık", "hafif", "ağır", "neden düşüyor"],
    "body": ["body", "cell", "cells", "organ", "heart", "brain", "blood", "bone", "muscle", "dna", "gene", "breathe", "eat", "sleep", "vücut", "hücre", "organ", "kalp", "beyin", "kan", "kemik", "kas", "nefes", "yemek", "uyku"],
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

// ===== Simulation Toggle Function =====
function toggleSimulation(simId) {
    event.stopPropagation();
    const content = document.getElementById(simId);
    
    if (!content) {
        console.error('Simulation content not found:', simId);
        return;
    }
    
    const card = content.closest('.simulation-card');
    const expandIcon = card ? card.querySelector('.sim-expand') : null;
    
    const isHidden = content.style.display === 'none' || content.style.display === '';
    content.style.display = isHidden ? 'block' : 'none';
    
    if (expandIcon) {
        expandIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
    
    if (card) {
        card.classList.toggle('active', isHidden);
    }
}

// ===== Curriculum Navigation Functions =====
function toggleSchoolLevel(containerId) {
    const container = document.getElementById(containerId);
    
    if (container) {
        const isHidden = container.style.display === 'none' || container.style.display === '';
        container.style.display = isHidden ? 'block' : 'none';
        
        // Update expand icon
        let expandIconId;
        if (containerId === 'elementary-grades') expandIconId = 'elementary-expand';
        else if (containerId === 'middle-grades') expandIconId = 'middle-expand';
        else if (containerId === 'high-grades') expandIconId = 'high-expand';
        
        const expandIcon = document.getElementById(expandIconId);
        if (expandIcon) {
            expandIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        
        // Update button active state
        const btn = container.previousElementSibling;
        if (btn) {
            btn.classList.toggle('active', isHidden);
        }
    }
}

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

