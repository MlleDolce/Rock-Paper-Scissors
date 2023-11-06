function getPlayerChoice() {
  let playerSelection = prompt("Choose 'Rock', 'Paper', or 'Scissors'");

  playerSelection = playerSelection.toLowerCase();
  console.log("playerSelection:", playerSelection);

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
  ``;
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
  console.log("roundResults:", roundResults);

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
  const newPara = document.createElement("p");
  newPara.textContent = `Round ${whichRound}: ${content}`;
  roundResults.insertBefore(newPara, roundResults.firstChild);

  return content;
}

function resetGame() {
  whichRound = 1;
  playerScore = 0;
  computerScore = 0;
  roundsTied = 0;
  gameOver = false;

  gameResults.textContent = "";
  let roundResultsChildElements = roundResults.childNodes;
  roundResults.removeChild(roundResults.lastChild);
  // console.log("child nodes of round Results:", roundResultsChildElements);

  while (roundResults.firstChild) {
    roundResults.firstChild.remove();
  }
  computerScoreContainer.textContent = computerScore;
  playerScoreContainer.textContent = computerScore;
  hideNewGameButton();
}

function handleButtonClick(event) {
  const selectedButton = event.target;

  let playerSelection = selectedButton.textContent.toLowerCase();
  let computerSelection = getComputerChoice();

  let result = playRound(playerSelection, computerSelection);
  console.log("playerSelection:", playerSelection);

  switch (result[4]) {
    case "L":
      computerScore++;
      console.log("computerScoreContainer", computerScoreContainer.textContent);
      computerScoreContainer.textContent = computerScore;
      break;
    case "W":
      playerScore++;
      console.log(
        "playerScoreContainer",
        playerScoreContainer.firstChild.textContent
      );
      playerScoreContainer.textContent = playerScore;
      break;
    case "T":
      roundsTied++;
      break;
  }

  if (whichRound === 1) {
    btnNewGame.style.color = "#fff";
    btnNewGame.style.backgroundColor = "#999";
    btnNewGame.style.padding = "30px";
    btnNewGame.textContent = "Restart Game";
  }

  whichRound++;

  if (playerScore === 5 && playerScore > computerScore) {
    gameResultsText = `Congratulations, you won the game! You scored ${playerScore} and 
        the computer scored ${computerScore}. You tied in ${roundsTied} rounds.`;
    console.log("gameResultsText:", gameResultsText);
    gameResults.textContent = gameResultsText;
    gameOver = true;
  } else if (computerScore === 5 && computerScore > playerScore) {
    gameResultsText = `You lost the game. You scored ${playerScore} and the computer scored ${computerScore}. 
        You tied in ${roundsTied} rounds. Better luck next time!`;
    console.log("gameResultsText:", gameResultsText);
    gameResults.textContent = gameResultsText;
    gameOver = true;
  }

  if (gameOver === true) {
    highlightNewGameButtonStyle();
  }
}

function handleNewGameClick() {
  if (btnNewGame.textContent === "Play Again") {
    resetNewGameButtonStyle();
  }
  resetRPSButtonStyles();
  resetGame();
}

function highlightSelection(buttonChoice) {
  let borderLine = buttonChoice.nextElementSibling;

  borderLine.style.height = "25px";
  borderLine.style.animationPlayState = "running";

  rpsButtons.forEach((selection) => {
    if (selection !== buttonChoice) {
      borderLine = selection.nextElementSibling;

      borderLine.style.animationPlayState = "paused";
      borderLine.style.height = "0";
    }
  });
}

function highlightNewGameButtonStyle() {
  btnNewGame.textContent = "Play Again";
  btnNewGame.style.padding = "25px";
  btnNewGame.style.borderRadius = "5px";
  btnNewGame.style.color = "#fff";
  btnNewGame.style.fontSize = "20px";
  btnNewGame.style.fontStyle = "bold";
  btnNewGame.style.backgroundColor = "#ed2bc6";
}

function resetNewGameButtonStyle() {
  btnNewGame.textContent = "Restart Game";
  btnNewGame.style.padding = "15px";
  btnNewGame.style.borderRadius = "5px";
  btnNewGame.style.color = "#000";
  btnNewGame.style.backgroundColor = "#ddd";
}

function resetRPSButtonStyles() {
  rpsButtons.forEach((selection) => {
    const borderLine = selection.nextElementSibling;
    borderLine.style.height = "0";
  });
}

function hideNewGameButton() {
  btnNewGame.textContent = "";
  btnNewGame.style.backgroundColor = "#fff";
  btnNewGame.style.color = "#fff";
  btnNewGame.style.padding = "0";
  btnNewGame.style.border = "0";
}

let gameOver = false;
let whichRound = 1;
let playerScore = 0;
let computerScore = 0;
let roundsTied = 0;
let gameResultsText;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const rpsButtons = [btnRock, btnPaper, btnScissors];

const btnNewGame = document.getElementById("new-game");

btnNewGame.style.backgroundColor = "#fff";
btnNewGame.style.color = "#fff";
btnNewGame.style.padding = "0";
btnNewGame.style.border = "0";

const roundResults = document.getElementById("results-container");
const gameResults = document.getElementById("game-results");
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

btnRock.addEventListener("click", (event) => {
  highlightSelection(btnRock);
  handleButtonClick(event);
});
btnPaper.addEventListener("click", (event) => {
  highlightSelection(btnPaper);
  handleButtonClick(event);
});
btnScissors.addEventListener("click", (event) => {
  highlightSelection(btnScissors);
  handleButtonClick(event);
});

btnNewGame.addEventListener("click", handleNewGameClick);
