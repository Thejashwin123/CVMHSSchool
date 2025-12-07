const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// simple rule-based bot replies
function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hello! How can I help you?";
  } else if (msg.includes("0")) {
    return "Fees details: 1, location : 2, school timing : 3, contact : 4, principal name : 5, vice principal name : 6, about us : 7,  curriculum : 8,  results : 9, transport : 10,  library : library"; 
  } else if (msg.includes("time")) {
    return "Current time: " + new Date().toLocaleTimeString();
  } else if (msg.includes("1")) {
    return "class 1 to 12 - 85,000 per annum";
  } else if (msg.includes("2")) {
    return "Address: Thondamuthur Road, Vadavalli, Coimbatore - 641041, Tamil Nadu, Landmark: Near Vadavalli Bus Terminus, City: Coimbatore,District: Coimbatore,State: Tamil Nadu ";
  } else if (msg.includes("3")) {
    return "Classes 1-9:classes start at 8:30 AM and end at 3:30 PM from Monday to Friday.,classes 10-12:classes start at 8:00 AM and end at 5:00 PM from Monday to Friday.";
  } else if (msg.includes("4")) {
    return "Phone: (0422) 2423346";
  }  else if (msg.includes("5")) {
    return "PRINCIPAL NAME: NOT AVAILABLE";
  }  else if (msg.includes("6")) {
    return "VICE PRINCIPAL NAME: NOT AVAILABLE";
  }  else if (msg.includes("7")) {
    return "Mission: To provide a holistic education that nurtures students' physical, mental, intellectual, and spiritual growth, along with imparting strong moral values. ,Curriculum: Offers both the Tamil Nadu state board curriculum (Matriculation) and the CBSE curriculum. ,Education: Emphasizes not just knowledge, but also opening students' minds to learning and guiding their overall development. ,Motto: 'Keep smiling', encouraging students to face life's experiences with courage and balance. ,Established: 1984. ,Management: Managed by the Central Chinmaya Mission Trust, Mumbai. ";
  }  else if (msg.includes("8")) {
    return "The school follows the Samacheer Kalvi curriculum, focusing on a comprehensive education that includes academics, co-curricular activities, and value-based learning.";
  } else if (msg.includes("9")) {
    return "100% pass rate in board exams for the past 10 years, with many students achieving top ranks at district and state levels.";
  }  else if (msg.includes("10")) {
    return "Transport facilities include a fleet of well-maintained buses covering various routes in and around Coimbatore, ensuring safe and reliable transportation for students.";
  }   else if (msg.includes("library")) {
    return "The school library is well-stocked with a diverse collection of books, periodicals resources to support students' academic and recreational reading needs.";
  }
  
  return "Sorry, I didn't understand that. Try asking something else.";
}

// add message bubble
function addMessage(text, isUser) {
  const div = document.createElement("div");
  div.classList.add("msg");
  div.classList.add(isUser ? "user-msg" : "bot-msg");
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
}

// handle send
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, true);      // user message
  userInput.value = "";

  const reply = getBotReply(text);
  setTimeout(() => addMessage(reply, false), 400);  // bot reply
});