const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const hangman = [
    '',
    '\n  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========',
    '\n  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========='
  ];
  
  let correctNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let wrongGuesses = 0;
  
  console.log("Welcome to the Number Guessing Game with Hangman!");
  console.log("You have 6 attempts to guess the number (1-100).\n");
  
  function drawHangman() {
    console.log(hangman[wrongGuesses]);
  }
  
  function askForGuess() {
    readline.question("Enter your guess (1-100): ", (guess) => {
      guess = parseInt(guess);
      attempts++;
  
      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
        askForGuess();
      } else if (guess < correctNumber) {
        console.log("Too low! Try again.");
        wrongGuesses++;
        drawHangman();
        checkLoss();
        askForGuess();
      } else if (guess > correctNumber) {
        console.log("Too high! Try again.");
        wrongGuesses++;
        drawHangman();
        checkLoss();
        askForGuess();
      } else {
        console.log(`Correct! You took ${attempts} attempts.`);
        readline.close();
      }
    });
  }
  
  function checkLoss() {
    if (wrongGuesses >= 6) {
      console.log("You lost! The correct number was " + correctNumber + ".");
      console.log(`
        +---+
        |   |
        O   |
       /|\\  |
       / \\  |
           |
      =========
      `);
      console.log("\x1b[1mYOU LOST\x1b[0m");
      readline.close();
    }
  }
  
  askForGuess();
  