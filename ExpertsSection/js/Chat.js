const chatHistories = {
    "Mr. Denver Simonz": [
        { type: "bot", text: "Hello! I'm Mr. Denver Simonz, Plant Pathologist. How can I assist with your plants today?" },
        { type: "user", text: "My tomato leaves are turning yellow. Any idea why?" }
    ],
    "Mr. Harshitha Fernandez": [
        { type: "bot", text: "Hi there! Harshitha here, climate & weather expert. What's the weather challenge you're facing?" }
    ],
    "Miss. Shashi Waduage": [
        { type: "bot", text: "Hello! Shashi Waduage, soil scientist & agronomist. Tell me about your soil condition." }
    ]
};

const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatName = document.getElementById('chat-with-name');
const chatSpecialty = document.getElementById('chat-with-specialty');

// Load chat for selected expert
function loadChat(name, specialty) {
    chatName.textContent = name;
    chatSpecialty.textContent = specialty + ' • Active Now';

    chatWindow.innerHTML = '';

    (chatHistories[name] || []).forEach(msg => {
        const div = document.createElement('div');
        div.className = `message ${msg.type}`;
        div.textContent = msg.text;
        chatWindow.appendChild(div);
    });

    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Switch expert
document.querySelectorAll('.expert-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.expert-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const name = card.querySelector('.name').textContent;
        const specialty = card.querySelector('.specialty').textContent;

        loadChat(name, specialty);
    });
});

// Send message
function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    const currentExpert = chatName.textContent;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    chatWindow.appendChild(userMsg);

    // Save to history
    if (!chatHistories[currentExpert]) chatHistories[currentExpert] = [];
    chatHistories[currentExpert].push({ type: 'user', text });

    userInput.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate expert reply after delay
    setTimeout(() => {
        const replies = [
            "Thanks for the details! Let me analyze this...",
            "Got it! This could be due to nutrient deficiency or pests.",
            "I recommend checking soil pH first. Do you have a test kit?"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.textContent = randomReply;
        chatWindow.appendChild(botMsg);

        // Save reply to history
        chatHistories[currentExpert].push({ type: 'bot', text: randomReply });

        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1200);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

// Load initial expert
loadChat("Mr. Denver Simonz", "Plant Pathologist");