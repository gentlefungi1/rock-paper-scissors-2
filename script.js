let playerScore = 0;
let computerScore = 0;

const playerImages = document.querySelectorAll("img")[0];
const randomImages = document.querySelectorAll("img")[1];
const buttons = document.querySelectorAll(".button27");
const h3 = document.querySelector(".outcome");
const playScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const round = document.querySelector(".round");

const WINNING_SCORE = 5;

function updatePlayerImage(choice) {
    const imageMap = {
        rock: "./images/rps1.png",
        paper: "./images/rps2.png",
        scissors: "./images/rps3.png",
    };
    playerImages.setAttribute("src", imageMap[choice]);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];

    const imageMap = {
        rock: "./images/rps1.png",
        paper: "./images/rps2.png",
        scissors: "./images/rps3.png",
    };
    randomImages.setAttribute("src", imageMap[choice]);

    return choice;
}

function determineRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "tie";
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "player";
    }
    return "computer";
}

function updateScores(winner) {
    if (winner === "player") {
        playerScore++;
        playScore.innerText = `Player Score: ${playerScore}`;
        h3.innerText = "You win this round!";
    } else if (winner === "computer") {
        computerScore++;
        compScore.innerText = `Computer Score: ${computerScore}`;
        h3.innerText = "Computer wins this round!";
    } else {
        h3.innerText = "It's a tie!";
    }
}

function checkGameEnd() {
    if (playerScore === WINNING_SCORE) {
        round.innerText = "You won the game!";
        disableButtons();
    } else if (computerScore === WINNING_SCORE) {
        round.innerText = "Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(btn => btn.setAttribute("disabled", true));
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playScore.innerText = `Player Score: ${playerScore}`;
    compScore.innerText = `Computer Score: ${computerScore}`;
    h3.innerText = "Game reset. Start playing!";
    round.innerText = "";
    buttons.forEach(btn => btn.removeAttribute("disabled"));
}

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();

        updatePlayerImage(playerChoice);
        const winner = determineRoundWinner(playerChoice, computerChoice);
        updateScores(winner);
        checkGameEnd();
    });
});

// Optional: Add a reset button
const resetButton = document.querySelector(".reset-button");
if (resetButton) {
    resetButton.addEventListener("click", resetGame);
}

