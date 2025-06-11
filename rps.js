console.log("Hello World");


let humanScore = 0;
let computerScore = 0;

function getRandom3() {
    return Math.floor((Math.random() * 3))
}
// Logic to get the computer choice
function getComputerChoice() {
    if (getRandom3() == 0) {
        return "rock";
    }
    else if (getRandom3() == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}   

// Logic to get the human choice
function getHumanChoice() {
    let userChoice = prompt("Please enter your choice (rock/paper/scissors)?: ");
    return userChoice.toLowerCase();
}

// logic to display results in the DOM
function displayResult(message) {
    const resultDiv = document.querySelector("#result");
    // const resultMsg = document.createElement("p");
    // resultMsg.textContent = message;
    // resultDiv.appendChild(resultMsg); 
    resultDiv.textContent = message;
}

// logic to update the scores in DOM
function updateScores() {
    document.querySelector("#humanScore").textContent = `Human: ${humanScore}`;
    document.querySelector("#compScore").textContent = `Computer: ${computerScore}`;
}

// logic to check the game is over
function checkGameOver() {
    if (humanScore === 5) {
        displayResult("You win the game!");
        resetGame();
    }
    else if (computerScore === 5) {
        displayResult("Computer wins the game!");
        resetGame();
    }
}

// logic to reset the game if needed
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
}

// logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            displayResult("Draw: Both chose rock");
        } else if (computerChoice == "paper") {
            displayResult("Computer wins: rock < paper");
            computerScore++;
        } else {
            displayResult("You win: rock > scissors");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                displayResult("You win: paper > rock");
                humanScore++;
            } else if (computerChoice == "paper") {
                displayResult("Draw: Both chose paper");
            } else {
                displayResult("Computer wins: paper < scissors");
                computerScore++;
            }
        }
    else {
        if (computerChoice == "rock") {
            displayResult("Computer wins: scissors < rock");
            computerScore++;
        } else if (computerChoice == "paper") {
            displayResult("You win: scissors > paper");
            humanScore++;
        } else {
            displayResult("Draw: Both chose scissors");
        }
    }

    updateScores();
    checkGameOver();
}


document.querySelector("#rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

document.querySelector("#paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

document.querySelector("#scissor").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissor", computerChoice);
});
