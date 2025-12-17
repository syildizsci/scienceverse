// ===== Socratic Science Assistant with OpenAI =====
// This AI uses ChatGPT to ask guiding questions!

const OPENAI_API_KEY = "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";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// System prompt for Socratic teaching
const SYSTEM_PROMPT = `You are a Socratic tutor for kids.

RULE: When child asks "What is X?", ask about X ONLY. Nothing else.

FOR "What is water?":
- ASK: "Where do you see water? In your glass? In the sink?"
- ASK: "What does water feel like when you touch it?"
- ASK: "What color is water?"
- NEVER mention: rain, clouds, ice, snow, evaporation, freezing

FOR "What is the sun?":
- ASK: "Is the sun warm or cold?"
- ASK: "What color is the sun?"
- NEVER mention: stars, planets, space

FORMAT: Start with "😊 Great question! Let's think..." then ask ONE simple question.

Example:
Child: "What is water?"
You: "😊 Great question! Let's think... Where do you see water at home? In your glass, in the bathtub?"

IMPORTANT: Ask about THEIR topic only. Do not change the subject.`;

// Call OpenAI ChatGPT API
async function callGemini(userMessage, conversationHistory = []) {
    try {
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
                temperature: 0.7,
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
        console.error("OpenAI API error:", error);
        return null;
    }
}

// Conversation history for context
let conversationHistory = [];

// Socratic questions for each topic
const socraticQuestions = {
    "space": [
        "😊 Hmm, great question! Let's think together... What do you see in the sky during the day? At night?",
        "😊 Ooh, interesting! Let's think together... Have you ever looked at the stars? What do they look like?",
        "😊 Hmm, great question! Let's think together... Why is it dark at night but bright during the day?",
        "😊 Ooh, interesting! Let's think together... What planets do you know? Have you seen any in the sky?",
        "😊 Hmm, great question! Let's think together... What does the Moon look like tonight? Is it round or not?",
        "😊 Ooh, interesting! Let's think together... Is the Sun hot or cold? How do you know?"
    ],
    "gravity": [
        "😊 Hmm, great question! Let's think together... When you drop something, what happens to it?",
        "😊 Ooh, interesting! Let's think together... If you throw a ball up, does it stay up or come back down?",
        "😊 Hmm, great question! Let's think together... Why do you stay on the ground instead of floating away?",
        "😊 Ooh, interesting! Let's think together... When you jump, what brings you back down?",
        "😊 Hmm, great question! Let's think together... Does a heavy thing fall faster than a light thing? What do you think?",
        "😊 Ooh, interesting! Let's think together... Why don't things float around like they do in space videos?"
    ],
    "body": [
        "😊 Hmm, great question! Let's think together... What parts of your body can you name? Hands, eyes, heart?",
        "😊 Ooh, interesting! Let's think together... Can you feel your heart beating? Put your hand on your chest!",
        "😊 Hmm, great question! Let's think together... What happens when you run really fast? How does your body feel?",
        "😊 Ooh, interesting! Let's think together... Why do you need to eat food? What does your body do with it?",
        "😊 Hmm, great question! Let's think together... What do your eyes help you do? What about your ears?",
        "😊 Ooh, interesting! Let's think together... Why do you think you need to sleep every night?"
    ],
    "plants": [
        "😊 Hmm, great question! Let's think together... What plants do you see around you? Trees, flowers, grass?",
        "😊 Ooh, interesting! Let's think together... What do you need to keep a plant alive? What does it need?",
        "😊 Hmm, great question! Let's think together... What color are most plants? Why do you think they look that way?",
        "😊 Ooh, interesting! Let's think together... What happens if you don't water a plant for a long time?",
        "😊 Hmm, great question! Let's think together... Have you ever planted a seed? What did it need to grow?",
        "😊 Ooh, interesting! Let's think together... Where do plants get their food from? Do they eat like us?"
    ],
    "water": [
        "😊 Hmm, great question! Let's think together... Where do you see water every day? In your home, outside?",
        "😊 Ooh, interesting! Let's think together... What does water feel like? Is it hard or soft?",
        "😊 Hmm, great question! Let's think together... What can you do with water? Can you drink it, swim in it?",
        "😊 Ooh, interesting! Let's think together... What color is water? Can you see through it?",
        "😊 Hmm, great question! Let's think together... Is water always liquid? What happens when it gets very cold?",
        "😊 Ooh, interesting! Let's think together... Where does the water in your glass come from?"
    ],
    "atoms": [
        "😊 Hmm, great question! Let's think together... What is the smallest thing you can see with your eyes?",
        "😊 Ooh, interesting! Let's think together... Everything around you is made of tiny pieces. What things do you see around you?",
        "😊 Hmm, great question! Let's think together... Can you break a cookie into smaller pieces? How small can it go?",
        "😊 Ooh, interesting! Let's think together... Is a grain of sand big or small? Could there be something even smaller?",
        "😊 Hmm, great question! Let's think together... What's the difference between water and ice? They're made of the same stuff!",
        "😊 Ooh, interesting! Let's think together... Can you see air? How do you know it's there?"
    ]
};

// Turkish versions
const socraticQuestionsTR = {
    "space": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Gündüz gökyüzünde ne görüyorsun? Ya gece?",
        "😊 İlginç! Birlikte düşünelim... Yıldızlara hiç baktın mı? Nasıl görünüyorlar?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Gece neden karanlık, gündüz neden aydınlık?",
        "😊 İlginç! Birlikte düşünelim... Hangi gezegenleri biliyorsun? Gökyüzünde hiç gördün mü?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Ay bu gece nasıl görünüyor? Yuvarlak mı?",
        "😊 İlginç! Birlikte düşünelim... Güneş sıcak mı soğuk mu? Nereden biliyorsun?"
    ],
    "gravity": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Bir şeyi bıraktığında ne oluyor?",
        "😊 İlginç! Birlikte düşünelim... Topu yukarı atınca ne oluyor? Yukarıda kalıyor mu?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Neden yerde duruyorsun, havada süzülmüyorsun?",
        "😊 İlginç! Birlikte düşünelim... Zıpladığında seni aşağı ne indiriyor?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Ağır bir şey hafif bir şeyden hızlı mı düşer?",
        "😊 İlginç! Birlikte düşünelim... Uzay videolarındaki gibi eşyalar neden etrafta süzülmüyor?"
    ],
    "body": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Vücudunun hangi parçalarını sayabilirsin? Eller, gözler, kalp?",
        "😊 İlginç! Birlikte düşünelim... Kalbinin attığını hissedebiliyor musun? Elini göğsüne koy!",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Çok hızlı koşunca ne oluyor? Vücudun nasıl hissediyor?",
        "😊 İlginç! Birlikte düşünelim... Neden yemek yemen gerekiyor? Vücudun yemekle ne yapıyor?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Gözlerin ne işe yarıyor? Ya kulakların?",
        "😊 İlginç! Birlikte düşünelim... Neden her gece uyuman gerekiyor sence?"
    ],
    "plants": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Etrafında hangi bitkileri görüyorsun? Ağaçlar, çiçekler, çimenler?",
        "😊 İlginç! Birlikte düşünelim... Bir bitkiyi canlı tutmak için ne yaparsın? Neye ihtiyacı var?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Bitkilerin çoğu ne renk? Neden öyle görünüyorlar sence?",
        "😊 İlginç! Birlikte düşünelim... Bir bitkiyi uzun süre sulamazsan ne olur?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Hiç tohum ektin mi? Büyümek için neye ihtiyacı vardı?",
        "😊 İlginç! Birlikte düşünelim... Bitkiler yemeklerini nereden alıyor? Bizim gibi mi yiyorlar?"
    ],
    "water": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Her gün suyu nerede görüyorsun? Evinde, dışarıda?",
        "😊 İlginç! Birlikte düşünelim... Su nasıl hissettiriyor? Sert mi yumuşak mı?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Su ile ne yapabilirsin? İçebilir misin, yüzebilir misin?",
        "😊 İlginç! Birlikte düşünelim... Su ne renk? İçinden görebiliyor musun?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Su hep sıvı mı? Çok soğuyunca ne oluyor?",
        "😊 İlginç! Birlikte düşünelim... Bardağındaki su nereden geliyor?"
    ],
    "atoms": [
        "😊 Hmm, güzel soru! Birlikte düşünelim... Gözlerinle görebildiğin en küçük şey ne?",
        "😊 İlginç! Birlikte düşünelim... Etrafındaki her şey küçük parçalardan oluşuyor. Etrafında neler görüyorsun?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Bir kurabiyeyi küçük parçalara bölebilir misin? Ne kadar küçük olabilir?",
        "😊 İlginç! Birlikte düşünelim... Bir kum tanesi büyük mü küçük mü? Daha küçük bir şey olabilir mi?",
        "😊 Hmm, güzel soru! Birlikte düşünelim... Su ile buz arasındaki fark ne? Aynı şeyden yapılmışlar!",
        "😊 İlginç! Birlikte düşünelim... Havayı görebiliyor musun? Orada olduğunu nasıl biliyorsun?"
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
    // Hide all lesson plans
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

