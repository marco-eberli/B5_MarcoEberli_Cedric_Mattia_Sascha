const submitButton = document.getElementById("submitButton");
const name = document.getElementById("name");
const email = document.getElementById("email");

submitButton.disabled = true;

function validateForm() {
  if (name.value !== "" && email.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }   
}

name.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);