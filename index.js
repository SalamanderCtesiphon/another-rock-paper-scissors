///This is the Rock, Paper, Scissors game
function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  return choiceArray.at(Math.floor(Math.random() * 3)); 
};

let humanScore = 0;
let computerScore = 0;

const playerScoreCard = document.querySelector("#playerScore");
playerScoreCard.textContent = humanScore;

const computerScoreCard = document.querySelector("#computerScore");
computerScoreCard.textContent = computerScore;

const gameLog = document.querySelector("#gameLog");
gameLog.textContent = "Sample Text";

const playerChoices = document.querySelector("#playerChoices");
playerChoices.textContent = "These are the player's choices";

const newGameBtn = document.querySelector("#new");
newGameBtn.addEventListener("click", function(e) {
  playerChoices.textContent = "These are the player's choices";
  gameLog.textContent = "New game selected";
  playerScoreCard.textContent = 0;
  computerScoreCard.textContent = 0;
  humanScore = 0;
  computerScore = 0;
});

function playRound(humanChoice) { 
  let computerChoice = getComputerChoice();
  playerChoices.textContent = `Player : ${humanChoice}  Computer: ${computerChoice}`;

  if (humanChoice === "Rock" && computerChoice === "Scissors" || 
      humanChoice === "Paper" && computerChoice === "Rock" || 
      humanChoice === "Scissors" && computerChoice === "Paper") {
      return "Player win" ;
  } else if (humanChoice === "Rock" && computerChoice === "Rock" || 
      humanChoice === "Paper" && computerChoice === "Paper" || 
      humanChoice === "Scissors" && computerChoice === "Scissors") {
      return "No win" ;
  } else if (humanChoice === "Rock" && computerChoice === "Paper" || 
      humanChoice === "Paper" && computerChoice === "Scissors" || 
      humanChoice === "Scissors" && computerChoice === "Rock") {
      return "Computer win";
  } else { console.log("enter a valid choice: Rock, Paper or Scissors") }
};

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  let humanChoice = "Rock";
  let gameResult = playRound(humanChoice);
  if(gameResult === "Player win") {
    gameLog.textContent = gameResult;
    humanScore++;
  }else if (gameResult === "Computer win") {
    gameLog.textContent = gameResult;
    computerScore++;
  } else {
    gameLog.textContent = gameResult;
  }
  playerScoreCard.textContent = humanScore;
  computerScoreCard.textContent = computerScore;
  if(humanScore > 4){
    gameLog.textContent = "Player won!!!!!!!!!!!";
  }
  if(computerScore > 4) {
    gameLog.textContent = "Sorry Charlie, computer won!";
  }
  });

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  let humanChoice = "Paper";
  let gameResult = playRound(humanChoice);
  if(gameResult === "Player win") {
    gameLog.textContent = gameResult;
    humanScore++;
  }else if (gameResult === "Computer win") {
    gameLog.textContent = gameResult;
    computerScore++;
  } else {
    gameLog.textContent = gameResult;
  }
  playerScoreCard.textContent = humanScore;
  computerScoreCard.textContent = computerScore;
  if(humanScore > 4){
    gameLog.textContent = "Player won!!!!!!!!!!!";
  }
  if(computerScore > 4) {
    gameLog.textContent = "Sorry Charlie, computer won!";
  }

});

const scissorsBtn =document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  let humanChoice = "Scissors";

  let gameResult = playRound(humanChoice);
  if(gameResult === "Player win") {
    gameLog.textContent = gameResult;
    humanScore++;
  }else if (gameResult === "Computer win") {
    gameLog.textContent = gameResult;
    computerScore++;
  } else {
    gameLog.textContent = gameResult;
  }
  playerScoreCard.textContent = humanScore;
  computerScoreCard.textContent = computerScore;
  if(humanScore > 4){
    gameLog.textContent = "Player won!!!!!!!!!!!";
  }
  if(computerScore > 4) {
    gameLog.textContent = "Sorry Charlie, computer won!";
  }
});
