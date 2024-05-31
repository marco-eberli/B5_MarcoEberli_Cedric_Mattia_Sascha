document.addEventListener("DOMContentLoaded", function() { //Doesn't work without this eventhough at the bottom in html file...?
  const audioOne = document.getElementById("audioOne");
  const audioTwo = document.getElementById("audioTwo");
  const audioThree = document.getElementById("audioThree");
  const audioFour = document.getElementById("audioFour");
  const audioFive = document.getElementById("audioFive");
  const audioSix = document.getElementById("audioSix");
  const audioSeven = document.getElementById("audioSeven");
  const audioEight = document.getElementById("audioEight");
  const audioNine = document.getElementById("audioNine");

  let buttonOne = document.getElementById("1");
  let buttonTwo = document.getElementById("2");
  let buttonThree = document.getElementById("3");
  let buttonFour = document.getElementById("4");
  let buttonFive = document.getElementById("5");
  let buttonSix = document.getElementById("6");
  let buttonSeven = document.getElementById("7");
  let buttonEight = document.getElementById("8");
  let buttonNine = document.getElementById("9");

  buttonOne.addEventListener("click", soundOne);
  buttonTwo.addEventListener("click", soundTwo);
  buttonThree.addEventListener("click", soundThree);
  buttonFour.addEventListener("click", soundFour);
  buttonFive.addEventListener("click", soundFive);
  buttonSix.addEventListener("click", soundSix);
  buttonSeven.addEventListener("click", soundSeven);
  buttonEight.addEventListener("click", soundEight);
  buttonNine.addEventListener("click", soundNine);

  function soundOne() {
    if (!buttonOne.classList.contains("looping")) {
      audioOne.play();
      audioOne.loop = true;
      buttonOne.classList.add("looping");
      buttonOne.classList.remove("pixel-border");
    } else {
      audioOne.pause();
      audioOne.loop = false;
      buttonOne.classList.remove("looping");
      buttonOne.classList.add("pixel-border");
    }
  }

  function soundTwo() {
    if (!buttonTwo.classList.contains("looping")) {
      audioTwo.play();
      audioTwo.loop = true;
      buttonTwo.classList.add("looping");
      buttonTwo.classList.remove("pixel-border");
    } else {
      audioTwo.pause();
      audioTwo.loop = false;
      buttonTwo.classList.remove("looping");
      buttonTwo.classList.add("pixel-border");
    }
  }

  function soundThree() {
    if (!buttonThree.classList.contains("looping")) {
      audioThree.play();
      audioThree.loop = true;
      buttonThree.classList.add("looping");
      buttonThree.classList.remove("pixel-border");
    } else {
      audioThree.pause();
      audioThree.loop = false;
      buttonThree.classList.remove("looping");
      buttonThree.classList.add("pixel-border");
    }
  }

  function soundFour() {
    if (!buttonFour.classList.contains("looping")) {
      audioFour.play();
      audioFour.loop = true;
      buttonFour.classList.add("looping");
      buttonFour.classList.remove("pixel-border");
    } else {
      audioFour.pause();
      audioFour.loop = false;
      buttonFour.classList.remove("looping");
      buttonFour.classList.add("pixel-border");
    }
  }

  function soundFive() {
    if (!buttonFive.classList.contains("looping")) {
      audioFive.play();
      audioFive.loop = true;
      buttonFive.classList.add("looping");
      buttonFive.classList.remove("pixel-border");
    } else {
      audioFive.pause();
      audioFive.loop = false;
      buttonFive.classList.remove("looping");
      buttonFive.classList.add("pixel-border");
    }
  }

  function soundSix() {
    if (!buttonSix.classList.contains("looping")) {
      audioSix.play();
      audioSix.loop = true;
      buttonSix.classList.add("looping");
      buttonSix.classList.remove("pixel-border");
    } else {
      audioSix.pause();
      audioSix.loop = false;
      buttonSix.classList.remove("looping");
      buttonSix.classList.add("pixel-border");
    }
  }

  function soundSeven() {
    if (!buttonSeven.classList.contains("looping")) {
      audioSeven.play();
      audioSeven.loop = true;
      buttonSeven.classList.add("looping");
      buttonSeven.classList.remove("pixel-border");
    } else {
      audioSeven.pause();
      audioSeven.loop = false;
      buttonSeven.classList.remove("looping");
      buttonSeven.classList.add("pixel-border");
    }
  }

  function soundEight() {
    if (!buttonEight.classList.contains("looping")) {
      audioEight.play();
      audioEight.loop = true;
      buttonEight.classList.add("looping");
      buttonEight.classList.remove("pixel-border");
    } else {
      audioEight.pause();
      audioEight.loop = false;
      buttonEight.classList.remove("looping");
      buttonEight.classList.add("pixel-border");
    }
  }

  function soundNine() {
    if (!buttonNine.classList.contains("looping")) {
      audioNine.play();
      audioNine.loop = true;
      buttonNine.classList.add("looping");
      buttonNine.classList.remove("pixel-border");
    } else {
      audioNine.pause();
      audioNine.loop = false;
      buttonNine.classList.remove("looping");
      buttonNine.classList.add("pixel-border");
    }
  }

  function revealForm() {
    document.getElementsByClassName("form-container")[0].style.backgroundColor = "#ffffff90";
    document.getElementsByClassName("form-container")[0].style.zIndex = "10";
    document.getElementById("login-popup-container").style.display = "inline-block";
    deactivateAllButtons();
    console.log("Form revealed");
  }

  setTimeout(revealForm, 10000);

  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", hideForm);

  function hideForm() {
    document.getElementsByClassName("form-container")[0].style.backgroundColor = "#ffffff00";
    document.getElementById("login-popup-container").style.display = "none";
    document.getElementsByClassName("form-container")[0].style.zIndex = "-1";
    console.log("Form hidden");
  }

  function deactivateAllButtons() {
    audioOne.pause();
    buttonOne.classList.remove("looping");
    buttonOne.classList.add("pixel-border");

    audioTwo.pause();
    buttonTwo.classList.remove("looping");
    buttonTwo.classList.add("pixel-border");

    audioThree.pause();
    buttonThree.classList.remove("looping");
    buttonThree.classList.add("pixel-border");

    audioFour.pause();
    buttonFour.classList.remove("looping");
    buttonFour.classList.add("pixel-border");

    audioFive.pause();
    buttonFive.classList.remove("looping");
    buttonFive.classList.add("pixel-border");

    audioSix.pause();
    buttonSix.classList.remove("looping");
    buttonSix.classList.add("pixel-border");

    audioSeven.pause();
    buttonSeven.classList.remove("looping");
    buttonSeven.classList.add("pixel-border");

    audioEight.pause();
    buttonEight.classList.remove("looping");
    buttonEight.classList.add("pixel-border");

    audioNine.pause();
    buttonNine.classList.remove("looping");
    buttonNine.classList.add("pixel-border");
  }
});
