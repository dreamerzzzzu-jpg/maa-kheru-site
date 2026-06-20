const correctPassword = "maakheryu12";

const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
const passwordScreen = document.getElementById("passwordScreen");
const landingScreen = document.getElementById("landingScreen");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value === correctPassword) {
    passwordScreen.classList.add("hidden");
    landingScreen.classList.remove("hidden");
    message.textContent = "";
    return;
  }

  message.textContent = "Incorrect password.";
  passwordInput.value = "";
  passwordInput.focus();
});
