/*
The Random Number Guessing Game
Generates a number between 1 to 6
and gives a player two attempts to guess the number
*/

// assumes the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor (Math.random() * 6) + 1;


var guess = prompt ("I am thinking of a number between 1 and 6, What is it?");

/* test to see if player is
1. correct
2. guessed too high
3. guessed too low
*/

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

// test if player is correct and output response.


if (correctGuess === true) {
  document.write("Well done! You Guessed the number: " + guess )
} else {
  document.write("Sorry! the number was: " + randomNumber)
}