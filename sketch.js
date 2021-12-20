const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon","hai"],
    ["i am fine","i am good"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up","what do you do"],
    ["how old are you","what is your age"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["i am human being","i am human","i am a boy","i am a girl"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself",
      "how can i call you"
    ],
    ["i love you","i like you so much","i like you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me"],
    ["tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice","hmm","mm"],
    ["bye", "good Heybye", "goodbye", "see you later"],
    ["what should i eat today","what is your lunch","what is your breakfast","what is your dinner"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks","no need"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
  ]
  
  
  
  
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    ["That's good"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
      "Fine ...and you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually",
      "I am a chat bot"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Ok,go on"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV","I am here to help you"],
    ["What about?","Tell me ,how can i help you?"],
    ["It is hard to told"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Tell me"],
    ["Great question"],
    ["That's ok","I understand"],
    ["Please say something "],
    ["Haha!","Good one!"]
  ]
  
  
  
  
  const alternative=[
    
    "same..",
    "can you give any other relevant to this?",
    "I can't understand",
    "okay","ok","kk",
    "say some example",
    "Try again",
    "I'am listening",
    "Go on"
    ]
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });
  
  
  
  function output(input) {
    let product;
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/its/g, "")
      .replace(/r u/g, "are you");
    
    
    product = compare(prompts,replies,text);
  
    // Update DOM
    addChat(input, product);
  }
  
  
  
  
  function compare(pro,rep,text)  
    {
       for(let i=0;i<pro.length;i++) 
          {
            for(let j=0;j<pro[i].length;j++) 
              { 
                if(pro[i][j] == text)
                  {
                    replyarray = rep[i];
                    reply = replyarray[Math.floor(Math.random()*replyarray.length)];
                   return(reply);
                   break;
                  }
                }
            }
      if (true){
                    alreply = alternative[Math.floor(Math.random()*alternative.length)];
                    return alreply;
                  }
    }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="https://cliply.co/wp-content/uploads/2019/09/391909180_THINKING_FACE_400px.gif" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpz5h49_1CBYw6MBGlw8CNX-_U-BxVkBMLfQ&usqp=CAU";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay to seem "real"
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product);
    }, 2000
    )}
  
  
  
  
  
  
  