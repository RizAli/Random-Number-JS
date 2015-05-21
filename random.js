var inputTwo
var inputOne = prompt("Please type a number");
topNumber = parseInt(inputOne);

randomNumber = (Math.floor(Math.random() * topNumber +1));

document.write("<p>" + randomNumber + " is a number between 1 and " + topNumber + "</p>");