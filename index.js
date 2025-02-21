///This is the Rock, Paper, Scissors game

function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  return choiceArray.at(Math.floor(Math.random() * 3)); 
};

///let computerChoice = "Scissors"///getComputerChoice()

function getHumanChoice() {
  const getUserInput = prompt("Enter either: Rock, Paper or Scissors");
  return getUserInput;
};

///let humanChoice = "Rock"///getHumanChoice()


function playRound() {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if(humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    console.log(humanChoice + " beats " + computerChoice + ". " + "Player's score: " + humanScore);
  } else if (humanChoice === "Rock" && computerChoice === "Rock") {
    console.log(humanChoice + " ties with " + computerChoice + ". ");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    console.log(computerChoice + " beats " + humanChoice + ". " + "Computer's score: " + computerScore);
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    console.log(humanChoice + " beats " + computerChoice + ". " + "Player's score: " + humanScore);
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    console.log(humanChoice + " ties with " + computerChoice + ". ");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    console.log(computerChoice + " beats " + humanChoice + ". " + "Computer's score: " + computerScore);
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    console.log(computerChoice + " beats " + humanChoice + ". " + "Computer's score: " + computerScore);
  } else if (humanChoice === "Scissores" && computerChoice === "Scissors") {
    console.log(humanChoice + " ties with " + computerChoice + ". ");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    console.log(humanChoice + " beats " + computerChoice + ". " + "Player's score " + humanScore);
  } 
};

playRound();
