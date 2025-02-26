

//computer choice function

function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber <= 0.3){
        return  "Rock";
    }
    else if(randomNumber > 0.3 && randomNumber<0.7){
        return  "Paper";
    }
    else{
        return  "Scissors";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice)


//human choice function

let humanInput = prompt("Enter your choice: rock, paper or scissors");
function getHumanChoice(){
   
    if (humanInput.toLowerCase() === "rock"){
        return "Rock";
    }
    else if (humanInput.toLowerCase() === "paper"){
        return "Paper";
    }
    else if(humanInput.toLowerCase() === "scissors"){
        return "Scissors"
    }
    else {
        alert("You have to choose rock, or paper or scissors");
    }
}
let humanChoice = getHumanChoice()
console.log(humanChoice);

// one round of the game
let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice){
    if (computerChoice === "Rock" && humanChoice === "Paper"){
        humanScore++;
        console.log("Paper beats rock, you win!");
    }
    else if(computerChoice === "Rock" && humanChoice === "Scissors"){
        computerScore++;
        console.log("Rock beats scissors, you lose!")
    }
    else if(computerChoice === "Rock" && humanChoice === "Rock"){
        console.log("Thats a tie!");
}
    else if(computerChoice === "Paper" && humanChoice === "Rock"){
        computerScore++;
        console.log("Paper beats rock, you lose!");
    }
    else if(computerChoice === "Paper" && humanChoice === "Scissors"){
        humanScore++;
        console.log("Scisors beat paper, you win!");
    }
    else if(computerChoice === "Paper" && humanChoice === "Paper"){
        console.log("Thats a tie!");
    }
    else if(computerChoice === "Scissors" && humanChoice === "Scissors"){
        console.log("Thats a tie!");
    }
    else if(computerChoice === "Scissors" && humanChoice === "Paper"){
        computerScore++;
        console.log("Scisors beat paper, you lose!");
    }
    else if(computerChoice === "Scissors" && humanChoice === "Rock"){
        humanScore++;
        console.log("Rock beats scissors, you win!");
    }

}
playRound(computerChoice, humanChoice);
console.log("Computer - " + computerScore);
console.log("Human - " + humanScore);