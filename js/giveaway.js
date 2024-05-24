const audioElementOne = document.getElementById("audioOne")
const audioSourceOne = audioElementOne.src;
const audioOne = new Audio(audioSource.src);

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
  audioOne.play();
}

function soundTwo() {
  audioTwo.play();
}

function soundThree() {
  audioThree.play();
}

function soundFour() {
  audioFour.play();
}

function soundFive() {
  audioFive.play();
}

function soundSix() {
  audioSix.play();
}

function soundSeven() {
  audioSeven.play();
}

function soundEight() {
  audioEight.play();
}

function soundNine() {
  audioNine.play();
}