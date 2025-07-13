let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");

// Function to generate a random computer choice
const genCompChoice = ()  =>  {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Function to handle a draw
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was a draw. Play again.";
}

// Function to display the winner
const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!"); 
        msg.innerText = "You win!";
        userScore++;  // Increment the user's score
        userScoreElement.innerText = userScore;  // Update the displayed user score
    } else {
        console.log("you lose");
        msg.innerText = "You lose.";
        compScore++;  // Increment the computer's score
        compScoreElement.innerText = compScore;  // Update the displayed computer score
    }
}

// Function to play the game
const playGame = (userChoice)  => {
    console.log("user choice =", userChoice);
    
    const compChoice = genCompChoice(); // Get the computer's choice
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked...!", userChoice);
        playGame(userChoice);
    })
});
