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

function playRound(playerSelection) {

    let playerChoice = playerSelection.toLowerCase().trim()//prompt("Enter your choice (rock/paper/scissors)").toLowerCase().trim();
    let playerValue;
    let computerChoice = getComputerChoice();
    console.log("Computer Choice: " + computerChoice);
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

let startButton = document.querySelector('#start-button');

startButton.addEventListener('click', (event) => {
    let gameStartedMessage = document.createElement('div');
    gameStartedMessage.textContent = "The game has started! (First to five wins)";
    gameResult.appendChild(gameStartedMessage);

    buttons.forEach(button => {
        button.addEventListener('click', playRoundAndUpdate)
    })
    let playerWins = 0;
    let computerWins = 0;
    let totalDraws = 0;

    function playRoundAndUpdate(event) {
        if(!(playerWins == 5 || computerWins == 5)) {
                
        playRound(event.target.innerText);

        if(result === "Draw") {
            totalDraws++;
            console.log("You drew!")
        }
        else if(result === "Loss") {
            computerWins++;
            console.log("You lost!")
        }
        else if(result === "Win") {
            playerWins++;
            console.log("You Won!")
        }
                
             
        updatedGameResult.textContent = "(Player Score : Draws : Computer Score) " + 
        playerWins + " : " + totalDraws + " : " + computerWins;
        
        gameResult.appendChild(updatedGameResult);
        }
    }
})
   

const buttons = document.querySelectorAll('button');




let gameResult = document.querySelector('#game-result');
let updatedGameResult = document.createElement('div');

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let totalDraws = 0;

    
    while(!(playerWins == 5 || computerWins == 5)) {
        

        if(result === "Draw") {
            totalDraws++;
            console.log("You drew!")
        }
        else if(result === "Loss") {
            computerWins++;
            console.log("You lost!")
        }
        else if(result === "Win") {
            playerWins++;
            console.log("You Won!")
        }
        
            
        

        updatedGameResult.textContent = "(Player Score : Draws : Computer Score) " + 
        playerWins + " : " + totalDraws + " : " + computerWins;

        gameResult.appendChild(updatedGameResult);
    }

    return "The score for 5 rounds of rock-paper-scissors was: Win: " + playerScore + " , Losses: " + computerScore + " , Draws: " + totalDraws;
}

// console.log(playGame())
