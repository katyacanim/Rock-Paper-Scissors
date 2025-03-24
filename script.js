//change how we get human choice
//on click button id must be sent to human choice ???


let computerScore = 0;
let humanScore = 0;



function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.3) {
        return "Rock";
    }
    else if (randomNumber > 0.3 && randomNumber < 0.7) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const container = document.querySelector("div");
const paraComputerChoice = document.createElement("p")
container.appendChild(paraComputerChoice);
const roundResult = document.createElement("p");
container.appendChild(roundResult);
const currentScore = document.createElement("p");
container.appendChild(currentScore);

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++;
        roundResult.textContent = "Paper beats rock, you win!";
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        roundResult.textContent = "Rock beats scissors, you lose!";
    }
    else if (computerChoice === "Rock" && humanChoice === "Rock") {
        roundResult.textContent = "Thats a tie!";
    }
    else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
       roundResult.textContent = "Paper beats rock, you lose!";
    }
    else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore++;
        roundResult.textContent = "Scissors beat paper, you win!";
    }
    else if (computerChoice === "Paper" && humanChoice === "Paper") {
        roundResult.textContent = "Thats a tie!";
    }
    else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
        roundResult.textContent = "Thats a tie!";
    }
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        roundResult.textContent = "Scissors beat paper, you lose!";
    }
    else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore++;
        roundResult.textContent = "Rock beats scissors, you win!";
    }
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let humanChoice = this.id;
        let computerChoice = getComputerChoice();
        paraComputerChoice.textContent = "Computer  choses - " + computerChoice;
        playRound(computerChoice, humanChoice);
        currentScore.textContent = "Score: Computer " + computerScore + " - " + humanScore + " Player";
        if(computerScore === 5 || humanScore === 5){
            container.textContent = "Game over";
            const finalResult = document.createElement("div");
            const finalScore = document.createElement("p");
            const winnerMessage = document.createElement("p");
            finalResult.appendChild(finalScore);
            finalResult.appendChild(winnerMessage);
            container.appendChild(finalResult);
            finalScore.textContent = "Final Score: Computer " + computerScore + " - " + humanScore + " Player";
            if (computerScore > humanScore) {
                winnerMessage.textContent = "SORRY YOU LOST.";
            }
            else if (computerScore < humanScore) {
               winnerMessage.textContent = "CONGRADULATIONS, YOU WON!!!!";
            }
            else {
                winnerMessage.textContent = "THATS A TIE!";
            }
        }
    })
})