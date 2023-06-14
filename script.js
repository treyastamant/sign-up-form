const form = document.querySelector("form")
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.querySelector("span.error");

form.addEventListener('submit', (event) => {
  if (password.value === confirmPassword.value) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    event.preventDefault();
    passwordError.textContent = "*Passwords do not match.";
    passwordError.className = "error active";
    password.className = "error input";
    confirmPassword.className = "error input";
  } 
});


