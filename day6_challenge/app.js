const hidden = document.querySelector(".hidden");
const hiddenH3 = hidden.querySelector("h3");
const hiddenH5 = hidden.querySelector("h5");
const guess = document.querySelector(".guess-number");
const guessInput = guess.querySelector("input");
const guessButton = guess.querySelector("button");
const max = document.querySelector(".max-number");
const maxInput = max.querySelector("input");

function guessButtonClick(event) {
  event.preventDefault();
  var randomNumber = Math.floor(Math.random() * maxInput.value) + 1;
  hiddenH5.innerText =
    "You chose: " + guessInput.value + ", the machine chose: " + randomNumber;
  if (guessInput.value == randomNumber) {
    hiddenH3.innerText = "You win!";
  } else {
    hiddenH3.innerText = "You lost!";
  }
}

guessButton.addEventListener("click", guessButtonClick);
