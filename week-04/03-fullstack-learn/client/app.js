const messageForm = document.querySelector("#messageForm");

messageForm.addEventListener("submit", handleSubmitMessageForm);

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((err) => console.error("Error:", err));
}
