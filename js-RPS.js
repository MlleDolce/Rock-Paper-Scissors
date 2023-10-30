function getPlayerChoice() {
  let playerSelection = prompt("Choose 'Rock', 'Paper', or 'Scissors'");

  //Make player selection all lower-case
  playerSelection = playerSelection.toLowerCase();
  console.log("playerSelection:", playerSelection);

  //Confirm that the player selection is one of the three valid game choices
  //If not, prompt the User for another entry.
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert(`${playerSelection} is an invalid game selection. Try again.`);
    getPlayerChoice();
  } else {
    console.log(`${playerSelection} is a valid choice.`);
  }
  return playerSelection;
}

function getComputerChoice() {
  let computerSelection = undefined;
  let randomNumber = Math.random() * 100;
  console.log("randomNumber:", randomNumber);

  if (randomNumber >= 0 && randomNumber <= 33.3) {
    computerSelection = "rock";
  } else if (randomNumber > 33.3 && randomNumber <= 66.6) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  console.log("computerSelection:", computerSelection);
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let content;
  const resultsContainer = document.getElementById("results-container");
  console.log("resultsContainer:", resultsContainer);

  if (playerSelection === "rock" && computerSelection === "rock") {
    content = "You Tie! You both chose rock.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    content = "You Lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    content = "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    content = "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    content = "You Tie! You both chose paper.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    content = "You Lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    content = "You Lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    content = "You Win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    content = "You Tie! You both chose scissors.";
  }

  console.log("content:", content);
  resultsContainer.firstChild.textContent = content;

  return content;
}

function handleButtonClick(event) {
  const selectedButton = event.target;

  let playerSelection = selectedButton.textContent.toLowerCase();
  console.log("playerSelection:", playerSelection);
  let computerSelection = getComputerChoice();

  let result = playRound(playerSelection, computerSelection);
  console.log("result[4]:", result[4]);

  switch (result[4]) {
    case "L":
      computerScore++;
      console.log("computerScoreContainer", computerScoreContainer.textContent);
      computerScoreContainer.textContent = computerScore;
      break;
    case "W":
      playerScore++;
      console.log("playerScoreContainer", playerScoreContainer.firstChild.textContent);
      playerScoreContainer.textContent = playerScore;
      break;
    case "T":
      roundsTied++;
      break;
  }

  roundsPlayed++;

  if ((roundsPlayed >= 5) && (playerScore > computerScore)) {
    gameResultsText = `Congratulations, you won the game! You scored ${playerScore} and 
        the computer scored ${computerScore}. You tied in ${roundsTied} rounds.`;
    console.log("gameResultsText:", gameResultsText);
    // console.log("gameResults", gameResults.textContent);
    gameResults.textContent = gameResultsText;
    gameOver = true;
  } else if ((roundsPlayed >= 5) && (computerScore > playerScore)) {
    gameResultsText = `You lost the game. You scored ${playerScore} and the computer scored ${computerScore}. 
        You tied in ${roundsTied} rounds. Better luck next time!`;
    console.log("gameResultsText:", gameResultsText);
    // console.log("gameResults:", gameResults);
    gameResults.textContent = gameResultsText;
    gameOver = true;
  }

  if (gameOver === true) {
    setTimeout(() => {
        let newGame = prompt("Would you like to play another game? Answer y or n.");
        console.log("newGame response:", newGame);

        if (newGame === "y") {
            roundsPlayed = 0;
            playerScore = 0;
            computerScore = 0;
            roundsTied = 0;
            gameOver = false;
    
            gameResults.textContent = "";
            computerScoreContainer.textContent = computerScore;
            playerScoreContainer.textContent = computerScore;
        } else if (newGame === "n") {
            gameResults.textContent = "Thanks for playing! Catch you next time.";
    
        };

    }, 1500);

  }

}

let gameOver = false;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let roundsTied = 0;
let gameResultsText;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const gameResults = document.getElementById("game-results");
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

btnRock.addEventListener("click", handleButtonClick);
btnPaper.addEventListener("click", handleButtonClick);
btnScissors.addEventListener("click", handleButtonClick);

