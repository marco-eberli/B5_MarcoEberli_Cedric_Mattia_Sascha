// (1) Variablen initialisieren
const submitButton = document.getElementById("submit");
const name = document.getElementById("name");
const email = document.getElementById("email");

//submitButton.disabled = true;

name.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);

function validateForm() {
  const nameValid = /^[A-Za-z\s]{3,}$/.test(name.value.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  if (nameValid && emailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// (2) Interaktionen festlegen
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("giveaway", {
    name: name.value,
    email: email.value,
  });
};
 