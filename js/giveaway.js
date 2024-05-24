const audioOne = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

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