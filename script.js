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

console.log(getComputerChoice());





