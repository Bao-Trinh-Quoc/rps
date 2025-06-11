console.log("Hello World");



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

function playGame() {
    // Declare the player score var

    
    // playRound(humanSelection, computerSelection);
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    if (computerScore > humanScore) {
        console.log("Computer wins more!");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (computerScore < humanScore) {
        console.log("Human wins more!");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);

    } else 
    {
        console.log("Draw");
    }
}
// logic to display results in the DOM
function displayResult(message) {
    const resultDiv = document.querySelector("#result");
    // const resultMsg = document.createElement("p");
    // resultMsg.textContent = message;
    // resultDiv.appendChild(resultMsg); 
    resultDiv.textContent = message;
}
// logic to play a single round
function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
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
