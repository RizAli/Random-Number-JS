var inputTwo = prompt("Please type a starting number");
bottomNumber = parseInt(inputTwo);
var inputOne = prompt("Please type an ending  number");
topNumber = parseInt(inputOne);

randomNumber = (Math.floor(Math.random() * (topNumber - bottomNumber +1)) + bottomNumber);

var message = "<p>" + randomNumber + " is a number random number between "  + bottomNumber +  " and "  + topNumber + "</p>"
document.write(message);