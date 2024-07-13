function displayChat(chat) {
  const ul = document.querySelector("#chat-ul");

  const li = document.createElement("li");
  li.innerText = `${chat.content}`;

  ul.appendChild(li);
}

async function readchat() {
  const res = await fetch("/chats");
  const jsonRes = await res.json();
  const ul = document.querySelector("#chat-ul");
  ul.innerHTML = "";
  jsonRes.forEach(displayChat);
}

async function createChat(value) {
  const res = await fetch("/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime(),
      content: value,
    }),
  });
  readchat();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  createChat(input.value);
  input.value = "";
}

const form = document.querySelector("#chat-form");
form.addEventListener("submit", handleSubmit);

readchat();
