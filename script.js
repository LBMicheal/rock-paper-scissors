/* VARIABLES AND LISTENERS */
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let playerPoints = 0;
let computerPoints = 0;

const results = document.querySelector(".results");

const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

/* ROCK BUTTON */
const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener(
  "click",
  () => (results.textContent = playRound(rock, getComputerChoice()))
);
rockButton.addEventListener(
  "click",
  () =>
    (playerScore.textContent =
      "Player Score: " + playerWin(results.textContent))
);
rockButton.addEventListener(
  "click",
  () =>
    (computerScore.textContent =
      "Computer Score: " + ComputerWin(results.textContent))
);
rockButton.addEventListener(
  "click",
  (results.textContent = playerVictory(playerPoints))
);
rockButton.addEventListener(
  "click",
  (results.textContent = computerVictory(computerPoints))
);

/* PAPER BUTTON */
const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener(
  "click",
  () => (results.textContent = playRound(paper, getComputerChoice()))
);
paperButton.addEventListener(
  "click",
  () =>
    (playerScore.textContent =
      "Player Score: " + playerWin(results.textContent))
);
paperButton.addEventListener(
  "click",
  () =>
    (computerScore.textContent =
      "Computer Score: " + ComputerWin(results.textContent))
);
paperButton.addEventListener(
  "click",
  (results.textContent = playerVictory(playerPoints))
);
paperButton.addEventListener(
  "click",
  (results.textContent = computerVictory(computerPoints))
);

/* SCISSORS BUTTON */
const scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.addEventListener(
  "click",
  () => (results.textContent = playRound(scissors, getComputerChoice()))
);
scissorsButton.addEventListener(
  "click",
  () =>
    (playerScore.textContent =
      "Player Score: " + playerWin(results.textContent))
);
scissorsButton.addEventListener(
  "click",
  () =>
    (computerScore.textContent =
      "Computer Score: " + ComputerWin(results.textContent))
);
scissorsButton.addEventListener(
  "click",
  (results.textContent = playerVictory(playerPoints))
);
scissorsButton.addEventListener(
  "click",
  (results.textContent = computerVictory(computerPoints))
);

/* SCORING FUNCTIONS*/
function playerWin(results) {
  if (results.includes("win")) {
    return (playerPoints = parseInt(playerPoints) + 1);
  } else {
    return playerPoints;
  }
}

function ComputerWin(results) {
  if (results.includes("lose")) {
    return (computerPoints = parseInt(computerPoints) + 1);
  } else {
    return computerPoints;
  }
}

function playerVictory(playerPoints) {
  if (playerPoints === 5) return "Player Wins";
}

function computerVictory(computerPoints) {
  if (computerPoints === 5) return "Computer Wins";
}

/* PLAYS A ROUND OF ROCK PAPER SCISSORS */
function playRound(playerChoice, computerChoice) {
  let outcome;

  if (playerChoice === "rock" && computerChoice === "paper") {
    outcome = "paper beats rock, you lose!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcome = "rock beats scissors, you win!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcome = "paper beats rock, you win!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    outcome = "scissors beats paper, you lose!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    outcome = "rock beats scissors, you lose!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcome = "scissors beats paper, you win!";
  } else if (playerChoice === computerChoice) {
    outcome = "it was a tie!";
  }

  let extraOutcome = "Computer chose " + computerChoice + " " + outcome;
  return extraOutcome;
}

/* CREATING A CHOICE FOR THE COMPUTER */
function getComputerChoice(computerSelection) {
  let num = Math.floor(Math.random() * 3);

  if (num === 0) {
    computerSelection = "rock";
  } else if (num === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}
