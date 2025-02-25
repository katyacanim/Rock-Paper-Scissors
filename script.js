
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