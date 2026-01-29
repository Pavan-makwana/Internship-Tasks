document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.getElementById("chatBtn");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  let appointmentStep = 0;
  let appointmentData = {};

  // Open / Close chat
  chatBtn.addEventListener("click", () => {
    chatBox.style.display = "flex";
  });

  closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
  });

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;

    addMessage(msg, "user");
    userInput.value = "";

    setTimeout(() => botReply(msg.toLowerCase()), 400);
  }

  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function botReply(msg) {

    // Start appointment
    if (msg.includes("appointment")) {
      appointmentStep = 1;
      addMessage("👤 Sure! What is your full name?", "bot");
      return;
    }

    if (appointmentStep === 1) {
      appointmentData.name = msg;
      appointmentStep = 2;
      addMessage("✉️ Please tell your email id.", "bot");
      return;
    }

    if (appointmentStep === 2) {
      appointmentData.email = msg;
      appointmentStep = 3;
      addMessage("📆 Please tell your preferred appointment date.", "bot");
      return;
    }

    if (appointmentStep === 3) {
      appointmentData.date = msg;
      appointmentStep = 4;
      addMessage("📞 Please enter your contact number.", "bot");
      return;
    }

    if (appointmentStep === 4) {
      appointmentData.contact = msg;
      appointmentStep = 0;

      addMessage(
`📌 Appointment Booked Successfully!

👤 Name: ${appointmentData.name}
✉️ Email: ${appointmentData.email}
📆 Date: ${appointmentData.date}
📞 Contact: ${appointmentData.contact}`,
        "bot"
      );

      addMessage("✅ Your appointment is confirmed.", "bot");
      return;
    }

    if (msg.includes("hello") || msg.includes("hi")) {
      addMessage("Hello 👋 I can help you book a medical appointment.", "bot");
      addMessage("✍️ Type appointment to begin.", "bot");
      return;
    }

    addMessage("🤖 I can help you book an appointment. Type appointment to begin.", "bot");
  }
});
