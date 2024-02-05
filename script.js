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
        return "You Drew! " + playerChoice + " draws with " + computerChoice;
    }
    else if (playerValue === 1 && computerValue === 2 || playerValue === 2 && computerValue === 3 
        || playerValue === 3 && computerValue === 1) {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
    else {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
}

console.log(playRound());

function playGame() {
    let playerScore;
    let computerScore;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}


