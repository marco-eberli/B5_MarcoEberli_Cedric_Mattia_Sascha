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
      buttonOne.classList.add("looping")
      buttonOne.classList.remove("pixel-border")
    } else {
      audioOne.pause();
      audioOne.loop = false;
      buttonOne.classList.remove("looping")
      buttonOne.classList.add("pixel-border")
    }
}

function soundTwo() {
  if (!audioTwo.classList.contains("looping")) {
      audioTwo.play();
      audioTwo.loop = true;
      audioTwo.classList.add("looping")
      audioTwo.classList.remove("pixel-border")
    } else {
      audioTwo.pause();
      audioTwo.loop = false;
      audioTwo.classList.remove("looping")
      audioTwo.classList.add("pixel-border")
    }
}

function soundThree() {
  if (!audioThree.classList.contains("looping")) {
      audioThree.play();
      audioThree.loop = true;
      audioThree.classList.add("looping")
      audioThree.classList.remove("pixel-border")
    } else {
      audioThree.pause();
      audioThree.loop = false;
      audioThree.classList.remove("looping")
      audioThree.classList.add("pixel-border")
    }
}

function soundFour() {
  if (!audioFour.classList.contains("looping")) {
      audioFour.play();
      audioFour.loop = true;
      audioFour.classList.add("looping")
      audioFour.classList.remove("pixel-border")
    } else {
      audioFour.pause();
      audioFour.loop = false;
      audioFour.classList.remove("looping")
      audioFour.classList.add("pixel-border")
    }
}

function soundFive() {
  if (!audioFive.classList.contains("looping")) {
      audioFive.play();
      audioFive.loop = true;
      audioFive.classList.add("looping")
      audioFive.classList.remove("pixel-border")
    } else {
      audioFive.pause();
      audioFive.loop = false;
      audioFive.classList.remove("looping")
      audioFive.classList.add("pixel-border")
    }
}

function soundSix() {
  if (!audioSix.classList.contains("looping")) {
      audioSix.play();
      audioSix.loop = true;
      audioSix.classList.add("looping")
      audioSix.classList.remove("pixel-border")
    } else {
      audioSix.pause();
      audioSix.loop = false;
      audioSix.classList.remove("looping")
      audioSix.classList.add("pixel-border")
    }
}

function soundSeven() {
  if (!audioSeven.classList.contains("looping")) {
      audioSeven.play();
      audioSeven.loop = true;
      audioSeven.classList.add("looping")
      audioSeven.classList.remove("pixel-border")
    } else {
      audioSeven.pause();
      audioSeven.loop = false;
      audioSeven.classList.remove("looping")
      audioSeven.classList.add("pixel-border")
    }
}

function soundEight() {
  if (!audioEight.classList.contains("looping")) {
      audioEight.play();
      audioEight.loop = true;
      audioEight.classList.add("looping")
      audioEight.classList.remove("pixel-border")
    } else {
      audioEight.pause();
      audioEight.loop = false;
      audioEight.classList.remove("looping")
      audioEight.classList.add("pixel-border")
    }
}

function soundNine() {
  if (!audioNine.classList.contains("looping")) {
      audioNine.play();
      audioNine.loop = true;
      audioNine.classList.add("looping")
      audioNine.classList.remove("pixel-border")
    } else {
      audioNine.pause();
      audioNine.loop = false;
      audioNine.classList.remove("looping")
      audioNine.classList.add("pixel-border")
    }
}