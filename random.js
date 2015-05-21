var correctGuess = false;
var randomNumber = Math.floor (Math.random() * 6) + 1;
var guess = prompt ("I am thinking of a number between 1 and 6, What is it?");

if (parseInt(guess) === randomNumber) {
  correctGuess = true;

} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try higher number");
    if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
    }

} else if (parseInt(guess) > randomNumber) {
  var guessless = prompt("Try lower number");
    if (parseInt(guessless) === randomNumber) {
      correctGuess = true;
    }
}

if (correctGuess === true) {
  document.write("Well done! You Guessed the number: " + guess )
} else {
  document.write("Sorry! the number was: " + randomNumber)
}