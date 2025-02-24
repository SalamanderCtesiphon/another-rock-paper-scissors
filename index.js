///This is the Rock, Paper, Scissors game
function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  return choiceArray.at(Math.floor(Math.random() * 3)); 
};

function getHumanChoice() {
  const getUserInput = prompt("Enter either: Rock, Paper or Scissors");
  let text1 = getUserInput.toLowerCase();
  let fLet = text1.at(0);
  let flet2 = fLet.toUpperCase()
  let text2 = flet2.concat("", text1.slice(1));
  return text2;
};



function playRound() { 
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === "Rock" && computerChoice === "Scissors" || 
      humanChoice === "Paper" && computerChoice === "Rock" || 
      humanChoice === "Scissors" && computerChoice === "Paper") {
      console.log(humanChoice + " beats " + computerChoice + ". ");
      return "Player win"
  } else if (humanChoice === "Rock" && computerChoice === "Rock" || 
      humanChoice === "Paper" && computerChoice === "Paper" || 
      humanChoice === "Scissors" && computerChoice === "Scissors") {
      console.log(humanChoice + " ties with " + computerChoice + ". ");
      return "No win"
  } else if (humanChoice === "Rock" && computerChoice === "Paper" || 
      humanChoice === "Paper" && computerChoice === "Scissors" || 
      humanChoice === "Scissors" && computerChoice === "Rock") {
      console.log(computerChoice + " beats " + humanChoice + ". ");
      return "Computer win"
  } else { console.log("enter a valid choice: Rock, Paper or Scissors") }
};


function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let gameResults = "";
  while (humanScore < 5 && computerScore < 5) {
  gameResults = playRound();
  if (gameResults === "No win") {
    console.log("No Winner")
  } else if (gameResults === "Computer win") {
    console.log("Computer win")
    computerScore++
  } else if (gameResults === "Player win") {
    humanScore++
    console.log("Player win")
  }
    
  console.log(`PLAYER SCORE: ${humanScore} COMPUTER SCORE: ${computerScore}`);
  }
  
};

playGame();
