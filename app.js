import chatBotService from "./chatbotservice.js";

const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");
const chatHeader = document.querySelector(".chat-header");
const container2 = document.querySelector(".container2");
const chatinput = document.querySelector(".chat-input");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

chatHeader.addEventListener("click", () => {
  container2.classList.toggle("collapse");
  chatinput.classList.toggle("collapse");
});

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user"); // Renderiza el mensaje del usuario primero
    txtInput.value = "";
    toggleLoading(false);
  
    renderChatbotResponse(userInput); // Luego renderiza la respuesta del chatbot
  };

  const renderChatbotResponse = (userInput) => {
    chatBotService
      .getBotResponse(userInput)
      .then((response) => {
        toggleLoading(true);
        renderMessageEle(response, "chatbot"); // Renderizamos la respuesta del chatbot
        setScrollPosition();
      })
      .catch((error) => {
        toggleLoading(true);
        setScrollPosition();
      });
  };


const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== 'user') {
    className = "chatbot-message";
  }
  
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");
  messageContainer.classList.add(className);
  
  if (type !== 'user') {
    const botResponseContainer = document.createElement("div");
    botResponseContainer.classList.add("bot-response-container");
    
    messageContainer.innerHTML = txt.replace(/\n/g, '<br>');
    botResponseContainer.append(messageContainer);
    chatBody.append(botResponseContainer);
  } else {
    messageContainer.innerHTML = txt;
    chatBody.append(messageContainer);
  }
};
  

const setScrollPosition = () => {
  chatBody.scrollTop = chatBody.scrollHeight;
};

const toggleLoading = (show) => {
  loadingEle.classList.toggle("hide", show);
};