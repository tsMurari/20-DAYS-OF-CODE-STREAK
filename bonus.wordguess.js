const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const words = ["javascript", "python", "ruby", "go", "java", "c++"];
  const hint = ["A popular programming language for web development", "A high-level programming language", "A dynamic, interpreted programming language", "A statically typed language for systems programming", "A popular programming language for enterprise applications", "A general-purpose programming language"];
  
  let randomIndex = Math.floor(Math.random() * words.length);
  let selectedWord = words[randomIndex];
  let wordLength = selectedWord.length;
  let currentGuess = Array(wordLength).fill("_");
  let attempts = 6;
  
  console.log("Welcome to the Word Guessing Game!");
  console.log("You have 6 attempts to guess the word.\n");
  console.log("Here's your hint: " + hint[randomIndex]);
  console.log("The word has " + wordLength + " letters.\n");
  console.log(currentGuess.join(" "));
  
  function updateCurrentGuess(letter) {
    let correctGuess = false;
    for (let i = 0; i < wordLength; i++) {
      if (selectedWord[i] === letter) {
        currentGuess[i] = letter;
        correctGuess = true;
      }
    }
    return correctGuess;
  }
  
  function checkWin() {
    if (currentGuess.join("") === selectedWord) {
      console.log("You win! The word was " + selectedWord + ".");
      readline.close();
    }
  }
  
  function checkLoss() {
    if (attempts === 0) {
      console.log("You lose! The word was " + selectedWord + ".");
      readline.close();
    }
  }
  
  function askForLetter() {
    readline.question("Enter a letter: ", (letter) => {
      if (letter.length !== 1) {
        console.log("Invalid input. Please enter a single letter.");
        askForLetter();
      } else if (currentGuess.includes(letter) || letter.match(/[^a-zA-Z]/)) {
        console.log("Invalid input. You've already tried that letter or it's not a letter.");
        askForLetter();
      } else {
        let correctGuess = updateCurrentGuess(letter);
        console.log(currentGuess.join(" "));
        if (!correctGuess) {
          console.log("Incorrect! " + --attempts + " attempts remaining.");
          checkLoss();
          askForLetter();
        } else {
          console.log("Correct!");
          checkWin();
          askForLetter();
        }
      }
    });
  }
  
  askForLetter();
  