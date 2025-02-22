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

let humanScore = 0;
let computerScore = 0;

function playRound(humanScore, computerScore) {
  
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === "Rock" && computerChoice === "Scissors" || 
    humanChoice === "Paper" && computerChoice === "Rock" || 
    humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      console.log(humanChoice + " beats " + computerChoice + ". " + "Player's score: " + humanScore);
  } else if (humanChoice === "Rock" && computerChoice === "Rock" || 
    humanChoice === "Paper" && computerChoice === "Paper" || 
    humanChoice === "Scissors" && computerChoice === "Scissors") {
      console.log(humanChoice + " ties with " + computerChoice + ". ");
  } else if (humanChoice === "Rock" && computerChoice === "Paper" || 
    humanChoice === "Paper" && computerChoice === "Scissors" || 
    humanChoice === "Scissors" && computerChoice === "Rock") {
      computerScore++;
      console.log(computerChoice + " beats " + humanChoice + ". " + "Computer's score: " + computerScore);
  } else { console.log("enter a valid choice: Rock, Paper or Scissors") }
};

playRound(humanScore, computerScore);
