// (1) Variablen initialisieren
const submitButton = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");


name.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
  
  submitButton.disabled = true;

  function validateForm() {
    const nameValid = /^[A-Za-z\s]{3,}$/.test(name.value.trim());
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    if (nameValid && emailValid) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }




submitButton.disabled = true;

// (2) Interaktionen festlegen
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("user", {
    name: nameField.value,
    email: emailField.value,
  });
};
