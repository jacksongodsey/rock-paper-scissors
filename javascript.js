const min = 0;
const max = 2;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * (max - min + 1)) + min;

  let str;

  if (choice == 0) {
    str = "rock";
  } else if (choice == 1) {
    str = "paper";
  } else if (choice == 2) {
    str = "scissors";
  }

  return str;
}


function playerSelection() {
  let userChoice = prompt("rock, paper, or scissors: ");
  userChoice = userChoice.toLowerCase();

  return userChoice;
}

function playRound() {

  let playerchoice = playerSelection();
  let computerchoice = getComputerChoice();

  if (playerchoice == computerchoice) {
    console.log(`you tied. you both picked ${playerchoice}`);
  } else if (
    (playerchoice === "rock" && computerchoice === "scissors") ||
    (playerchoice === "scissors" && computerchoice === "paper") ||
    (playerchoice === "paper" && computerchoice === "rock")
  ) {
    console.log(`you win. ${playerchoice} beats ${computerchoice}`);
  } else {
    console.log(`you lost. ${playerchoice} loses to ${computerchoice}`);
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}
