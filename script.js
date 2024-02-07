function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let position;
    if(randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
    
}

//console.log(getComputerChoice());
let result;
function playRound(playerSelection,computerSelection) {
    let playerChoice = prompt("Enter your choice (rock/paper/scissors)").toLowerCase();
    let playerValue;
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let computerValue;
    if(playerChoice === "rock") {
        playerValue = 1;
    }
    else if(playerChoice === "paper") {
        playerValue = 2;
    }
    else if(playerChoice === "scissors") {
        playerValue = 3;
    }

    if(computerChoice === "rock") {
        computerValue = 1;
    }
    else if(computerChoice === "paper") {
        computerValue = 2;
    }
    else if(computerChoice === "scissors") {
        computerValue = 3;
    }

    if(playerValue === computerValue) {
        result = "Draw";
        return "You Drew! " + playerChoice + " draws with " + computerChoice;
    }
    else if (playerValue === 1 && computerValue === 2 || playerValue === 2 && computerValue === 3 
        || playerValue === 3 && computerValue === 1) {
            result = "Loss";
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
    else {
        result = "Win";
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
}

//console.log(playRound());


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let totalDraws = 0;
    for(let i = 0; i < 5; i++) {
        playRound();
        if(result === "Draw") {
            totalDraws++;
            console.log("You drew!")
        }
        else if(result === "Loss") {
            computerScore++;
            console.log("You lost!")
        }
        else if(result === "Win") {
            playerScore++;
            console.log("You won!")
        }
    }
    return "The score for 5 rounds of rock-paper-scissors was: Win: " + playerScore + " , Losses: " + computerScore + " , Draws: " + totalDraws;
}

console.log(playGame())
