# Random-Generator - JS

Using Math object create a Random Generator

```
var inputTwo = prompt("Please type a starting number");
bottomNumber = parseInt(inputTwo);
var inputOne = prompt("Please type an ending  number");
topNumber = parseInt(inputOne);

randomNumber = (Math.floor(Math.random() * (topNumber - bottomNumber +1)) + bottomNumber);

var message = "<p>" + randomNumber + " is a number random number between "  + bottomNumber +  " and "  + topNumber + "</p>"
document.write(message);

```


Build a Simple Random Number Guessing Game

1. Generate a Random Number
2. prompt user to guess the number
3. parseInt the guess
4. finally and conditional Statement

```
var randomNumber = Math.floor (Math.random() * 5) + 1;
var input = prompt ("I am thinking of a number betwee 1 and 6, What is it?");
var userGuess = parseInt(input);
document.write (userGuess + 1);
if (userGuess === randomNumber) {
  document.write("You guessed the number")
} else {
  document.write("Sorry, Your guess is not right")
}

```

Improve Random number Guessing Game using the following criteria

1. if the guess is equal to the random number then player wins and the program is over.

2. if the guess is incorrect and if the guess is less then the random number, then tell the user the number is larger and player will have another attempt.

3. if the players second guess is correct then the player wins else losses.

4. if the guess is greater then the random number then inform the user and let the user to have another go.

5. and again if the players second guess is correct then the player wins else losses.

Improved version

```
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

```

