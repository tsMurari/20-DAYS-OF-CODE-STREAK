var userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput);

var age = parseInt(prompt("Please enter your age:"));
console.log("You are " + age + " years old.");

var fruits = ["Apple", "Banana", "Orange"];
var userFruit = prompt("Please enter a fruit:");
if (fruits.indexOf(userFruit) !== -1) {
    console.log("Yes, we have " + userFruit + " in our list of fruits.");
} else {
    console.log("Sorry, we do not have " + userFruit + " in our list of fruits.");
}
