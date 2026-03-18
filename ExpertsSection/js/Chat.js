const overlay = document.getElementById('waiting-overlay');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const typingIndicator = document.getElementById('typing-indicator');

// --- STEP 1: Simulate Expert Accepting (After 3 Seconds) ---
setTimeout(() => {
    unlockChat();
}, 3000);

function unlockChat() {
    overlay.classList.add('hidden');
    chatInput.disabled = false;
    sendBtn.disabled = false;
    chatInput.placeholder = "Type your message here...";

    const notify = document.createElement('div');
    notify.style.cssText = "text-align:center; font-size:0.75rem; color:#2e7d32; margin:10px 0; font-weight:bold;";
    notify.innerText = "Expert has joined the chat";
    chatBox.insertBefore(notify, typingIndicator);
}

// --- STEP 2: Handle Sending and Auto Reply ---
function appendMessage(text, side) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${side}`;
    msgDiv.textContent = text;
    chatBox.insertBefore(msgDiv, typingIndicator); // Always insert before typing indicator
    chatBox.scrollTop = chatBox.scrollHeight;
}

function expertReply(userText) {
    // Show typing indicator
    typingIndicator.style.display = "block";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate expert thinking for 2 seconds
    setTimeout(() => {
        typingIndicator.style.display = "none";

        let response = "";
        const input = userText.toLowerCase();

        // Simple Logic for Auto Replies
        if (input.includes("hello") || input.includes("hi")) {
            response = "Hello! How can I help you with your plants today?";
        } else if (input.includes("water") || input.includes("dry")) {
            response = "It sounds like a soil moisture issue. Have you checked the sensor readings on your dashboard?";
        } else if (input.includes("yellow")) {
            response = "Yellow leaves can be due to overwatering or lack of nitrogen. Can you send a photo?";
        } else {
            response = "That's interesting. Tell me more about the current conditions of your farm.";
        }

        appendMessage(response, 'bot');
    }, 2000);
}

sendBtn.onclick = () => {
    const text = chatInput.value.trim();
    if (text) {
        appendMessage(text, 'user');
        chatInput.value = '';
        expertReply(text); // Trigger the expert's response
    }
};

// Allow Enter key to send
chatInput.onkeypress = (e) => {
    if (e.key === 'Enter') sendBtn.click();
};