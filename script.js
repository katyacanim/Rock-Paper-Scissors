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



    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "Rock" && humanChoice === "Paper") {
            humanScore++;
            console.log("Paper beats rock, you win!");
        }
        else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            computerScore++;
            console.log("Rock beats scissors, you lose!")
        }
        else if (computerChoice === "Rock" && humanChoice === "Rock") {
            console.log("Thats a tie!");
        }
        else if (computerChoice === "Paper" && humanChoice === "Rock") {
            computerScore++;
            console.log("Paper beats rock, you lose!");
        }
        else if (computerChoice === "Paper" && humanChoice === "Scissors") {
            humanScore++;
            console.log("Scissors beat paper, you win!");
        }
        else if (computerChoice === "Paper" && humanChoice === "Paper") {
            console.log("Thats a tie!");
        }
        else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
            console.log("Thats a tie!");
        }
        else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            computerScore++;
            console.log("Scissors beat paper, you lose!");
        }
        else if (computerChoice === "Scissors" && humanChoice === "Rock") {
            humanScore++;
            console.log("Rock beats scissors, you win!");
        }
    }
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            let humanChoice = this.id;
            let computerChoice = getComputerChoice();
            console.log(humanChoice);
            console.log(computerChoice);
            playRound(computerChoice, humanChoice);
            
        })
    })




console.log("Final Scores:")
console.log("Computer - " + computerScore);
console.log("Human - " + humanScore);
if (computerScore > humanScore) {
    console.log("SORRY YOU LOST.");
}
else if (computerScore < humanScore) {
    console.log("CONGRADULATIONS, YOU WON!!!!");
}
else {
    console.log("THATS A TIE!");
}