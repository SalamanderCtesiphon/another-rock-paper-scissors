///This is the Rock, Paper, Scissors game

function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"]
  return choiceArray.at(Math.floor(Math.random() * 3)); 
}

let computerChoice = "Scissors"///getComputerChoice()

function getHumanChoice() {
  const getUserInput = prompt("Enter either: Rock, Paper or Scissors")
  return getUserInput;
}

let humanChoice = "Rock"///getHumanChoice()

let humanScore = 0
let computerScore =0

function playRound(computerChoice, humanChoice, humanScore, computerScore) {
  if(humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++
    console.log(humanChoice + " beats " + computerChoice + ". " + "Player's score: " + humanScore) 
  }
}

playRound(computerChoice, humanChoice, humanScore, computerScore)
