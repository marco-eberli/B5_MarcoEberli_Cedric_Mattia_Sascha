// Elemente aus dem Formular holen
const submitButton = document.getElementById("submitButton");
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const phoneField = document.getElementById('phoneField');
const confirmationMessage = document.getElementById('confirmation');
const orderForm = document.querySelector('form');

// Fehlermeldungen für jedes Feld
const errorMessages = {
  nameField: "give us your name, stupid.",
  phoneField: "dude, we need your phone number. it must start with +41",
  emailField: "can we get an email, honey?",
};

// Funktion zur Validierung des Formulars
const validateForm = (field) => {
let isValid = true;

  // Überprüfe das angegebene Feld
  if (!field.value) {
    isValid = false;
    field.classList.add('invalid');
    showErrorMessage(field);
  } else {
    field.classList.remove('invalid');
    hideErrorMessage(field);
  }

  // E-Mail Validierung
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (field === emailField && !emailPattern.test(emailField.value)) {
    isValid = false;
    emailField.classList.add('invalid');
    showErrorMessage(emailField);
  } else if (field === emailField) {
    emailField.classList.remove('invalid');
    hideErrorMessage(emailField);
  }

  // Telefonnummer Validierung
  if (field === phoneField && !phoneField.value.startsWith('+41')) {
    isValid = false;
    phoneField.classList.add('invalid');
    showErrorMessage(phoneField);
  } else if (field === phoneField) {
    phoneField.classList.remove('invalid');
    hideErrorMessage(phoneField);
  }

  // Überprüfung, ob alle Felder gültig sind
  const allFieldsValid = Array.from(fields).every(field => !field.classList.contains('invalid') && field.value);
  if (allFieldsValid) {
    submitButton.disabled = false;
    submitButton.classList.add('validated');
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove('validated');
  }

  return isValid;
};

// Funktion zum Anzeigen der Fehlermeldung
const showErrorMessage = (field) => {
  const errorMessageId = `${field.id}-error`;
  let errorMessageElement = document.getElementById(errorMessageId);
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('span');
    errorMessageElement.id = errorMessageId;
    errorMessageElement.classList.add('error-message');
    errorMessageElement.textContent = errorMessages[field.id];
    field.parentNode.appendChild(errorMessageElement);
  }
  errorMessageElement.style.display = 'block';
};

// Funktion zum Ausblenden der Fehlermeldung
const hideErrorMessage = (field) => {
  const errorMessageId = `${field.id}-error`;
  const errorMessageElement = document.getElementById(errorMessageId);
  if (errorMessageElement) {
    errorMessageElement.style.display = 'none';
  }
};

// Ereignisse zur Validierung bei Verlassen der Eingabefelder
const fields = orderForm.querySelectorAll('input');
fields.forEach(field => {
  field.addEventListener('blur', () => validateForm(field));
});

// Klick-Event für den Submit-Button
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  fields.forEach(field => validateForm(field));
  if (Array.from(fields).every(field => !field.classList.contains('invalid') && field.value)) {
    onClickSubmit();
  }
});

function hideForm() {
  document.getElementsByClassName("form-container")[0].style.backgroundColor = "#ffffff00";
  document.getElementById("login-popup-container").style.display = "none";
  document.getElementsByClassName("form-container")[0].style.zIndex = "-1";
  console.log("Form hidden");
}

// Speichert die Daten in der Datenbank und leert das Formular
const onClickSubmit = async () => {
  try {
    await databaseClient.insertInto("`giveaway`", {
      Name: nameField.value,
      Phone: phoneField.value,
      Email: emailField.value,
    });

    // Leert das Formular nach dem Absenden
    orderForm.reset();
    confirmationMessage.style.display = 'block';
    setTimeout(hideForm, 3000)
    submitButton.classList.remove('validated');
    fields.forEach(field => field.classList.remove('invalid'));
    // Optional: Fehlermeldungen ausblenden
    fields.forEach(hideErrorMessage);
  } catch (error) {
    console.error('Fehler beim Speichern in der Datenbank:', error);
    alert('Beim Speichern der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
  }
};

// Initial deaktiviere den Submit-Button
submitButton.disabled = true;
