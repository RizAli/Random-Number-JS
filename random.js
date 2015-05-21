var randomNumber = Math.floor (Math.random() * 5) + 1;
var input = prompt ("I am thinking of a number betwee 1 and 6, What is it?");
var userGuess = parseInt(input);
document.write (userGuess + 1);
if (userGuess === randomNumber) {
  document.write("You guessed the number")
} else {
  document.write("Sorry, Your guess is not right")
}

