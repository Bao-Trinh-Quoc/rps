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




// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
    // Declare the player score var
    let humanScore = 0;
    let computerScore = 0;
    // logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Draw rock");
            } else if (computerChoice == "paper") {
                console.log("rock < paper computer win");
                computerScore++;
            } else {
                console.log("rock > scissors human win");
                humanScore++;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("paper > rock human win");
                humanScore++;
            } else if (computerChoice == "paper") {
                console.log("Draw paper");
            } else {
                console.log("paper < scissors computer win");
                computerScore++;
            }
        }
        else {
            if (computerChoice == "rock") {
                console.log("scissors < rock computer win");
                computerScore++;
            } else if (computerChoice == "paper") {
                console.log("scissors > paper human win");
                humanScore++;
            } else {
                console.log("Draw scissors");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

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