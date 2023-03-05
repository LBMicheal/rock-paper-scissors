/* VARIABLES */
var playerPoints = 0;
var computerPoints = 0;

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

/* EVENTS */
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

/* FUNCTIONS */
function playGame(playerChoice) {
  playRound(playerChoice, getComputerChoice());

  if (playerPoints === 5) {
    alert("You Win!");
    playerPoints = 0;
    playerScore.textContent = "Player Score: " + playerPoints;
    computerPoints = 0;
    computerScore.textContent = "Computer Score: " + computerPoints;
  }

  if (computerPoints === 5) {
    alert("You Lose!");
    playerPoints = 0;
    playerScore.textContent = "Player Score: " + playerPoints;
    computerPoints = 0;
    computerScore.textContent = "Computer Score: " + computerPoints;
  }
}

function playRound(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        results.textContent = "rock beats paper";
        playerPoints = parseInt(playerPoints) + 1;
        playerScore.textContent = "Player Score: " + playerPoints;
      } else if (computerChoice === "paper") {
        results.textContent = "paper beats rock";
        computerPoints = parseInt(computerPoints) + 1;
        computerScore.textContent = "Computer Score: " + computerPoints;
      } else {
        results.textContent = "tie";
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        results.textContent = "paper beats rock";
        playerPoints = parseInt(playerPoints) + 1;
        playerScore.textContent = "Player Score: " + playerPoints;
      } else if (computerChoice === "scissors") {
        results.textContent = "scissor beats paper";
        computerPoints = parseInt(computerPoints) + 1;
        computerScore.textContent = "Computer Score: " + computerPoints;
      } else {
        results.textContent = "tie";
      }
      break;
    case "scissors":
      if (computerChoice === "paper") {
        results.textContent = "scissors beat paper";
        playerPoints = parseInt(playerPoints) + 1;
        playerScore.textContent = "Player Score: " + playerPoints;
      } else if (computerChoice === "rock") {
        results.textContent = "rock beats scissors";
        computerPoints = parseInt(computerPoints) + 1;
        computerScore.textContent = "Computer Score: " + computerPoints;
      } else {
        results.textContent = "tie";
      }
      break;
  }
}

function getComputerChoice(computerSelection) {
  let number = Math.floor(Math.random() * 3);

  if (number === 0) {
    computerSelection = "rock";
  } else if (number === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}
