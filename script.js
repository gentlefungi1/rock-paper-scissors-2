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



















































// console.log("hello, world!");
// let playerScore = 0;
// let computerScore = 0; 
// let playerImages = document.querySelectorAll("img")[0];
// let randomImages = document.querySelectorAll("img")[1];
// const button27 = document.querySelectorAll(".button27");
// const compImg = document.createElement('img');
// let h3 = document.querySelector(".outcome");
// let playScore = document.querySelector(".player-score");
// let compScore = document.querySelector(".computer-score");
// const round = document.querySelector('.round');
// const roundText = document.createTextNode("You won the game!");
// const roundText2 = document.createTextNode("Computer won the game!");




// button27.forEach(btn => {
//     btn.addEventListener("click", e => {
//         console.log(e.target);
//         const mySelection = e.target.id;
//         const computerSelection = getComputerChoice();


//         function playerSelection() {
//             if (mySelection === "rock"){
//                 playerImages.setAttribute("src", "./images/rps1.png")
//             }
//             else if (mySelection === "paper"){
//                 playerImages.setAttribute("src", "./images/rps2.png")
//             }
//             else if (mySelection === "scissors"){
//                 playerImages.setAttribute("src", "./images/rps3.png")
//             }
//         }

//         playerSelection()


//         function getComputerChoice(){
       
//             const getRandom = Math.floor(Math.random() * 3) + 1;
        
        
//             if (getRandom === 1){
//                 randomImages.setAttribute("src", "./images/rps1.png")
//                 return "rock";
//             }
//             else if(getRandom === 2){
//                 randomImages.setAttribute("src", "./images/rps2.png")
//                 return "paper";
//             }
//             else if(getRandom === 3){
//                 randomImages.setAttribute("src", "./images/rps3.png")
//                 return "scissors";
//             }
//         }


//         function playRound(mySelection, computerSelection) {   
            
        
//             if (mySelection === computerSelection) {
//                 //console.log("It's a tie!");
//                 h3.innerText = "It's a tie!";
//                 //pWon.remove();
//             } else if (
//                 (mySelection === "rock" && computerSelection === "scissors") ||
//                 (mySelection === "scissors" && computerSelection === "paper") ||
//                 (mySelection === "paper" && computerSelection === "rock")
//             ) {
//                 //console.log("You win!");
//                 h3.innerText = "You win!";
//                 //pWon.remove();
//             } else {
//                 //console.log("Computer wins!");
//                 h3.innerText = "Computer wins!";
//                 //pWon.remove();
//             };
            
//         };

//         function game(){            

//             if (mySelection === computerSelection) {
//                 // It's a tie; no one scores.
//             } 
//             else if (
//                 (mySelection === "rock" && computerSelection === "scissors") ||
//                 (mySelection === "scissors" && computerSelection === "paper") ||
//                 (mySelection === "paper" && computerSelection === "rock")
//             ) {
//                 playerScore++;
//             } 
//             else {
//                 computerScore++;
//             };
        
//             //console.log("Player Score: " + playerScore);
//             playScore.innerText = "Player Score: " + playerScore;
//             //console.log("Computer Score: " + computerScore);
//             compScore.innerText = "Computer Score: " + computerScore;      
        
//             if (playerScore == 5) {
//                 //round.appendChild(roundText);
//                 round.append(roundText);
//             } 
//             else if (computerScore == 5) {
//                 //round.appendChild(roundText2);
//                 round.append(roundText2);
//             } 
//             /*else {
//                 console.log("It's a tie game!");
//             }*/
            
//         };


//         playRound(mySelection, computerSelection);
//         game();
//     });
// });








// // function getHumanChoice(){
// //     let userInput;

// //     userInput.d

   
// //    return userInput;
// // }




// // btns.forEach(btn => {
// //     btn.addEventListener('click', (e) => {
        
// //         function getHumanChoice(){
// //             let userInput;
            
// //             if(e.target)
// //            return userInput;
// //         }


// //         function playRound(humanSelection, computerSelection) {
// //             // your code here!
        
// //             if (humanSelection === computerSelection){
// //                 console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". it'a tie!")
// //             }
// //             else if(
// //                 (humanSelection === "rock" && computerSelection === "scissors") || 
// //                 (humanSelection === "scissors" && computerSelection === "paper") ||
// //                 (humanSelection === "paper" && computerSelection === "rock"))
// //                 {
// //                 console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection +". Player 1 wins!");
// //                 return "human";
// //             }
// //             else if (
// //                 (humanSelection === "scissors" && computerSelection === "rock") ||
// //                 (humanSelection === "paper" && computerSelection === "scissors") ||
// //                 (humanSelection === "rock" && computerSelection === "paper"))
// //                 {
// //                 console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". Computer wins!");
// //                 return "computer";
// //             }
// //         }
        
        
// //         function playGame(){
// //             let humanScore = 0;
// //             let computerScore = 0;
// //             let rounds = 5;
        
// //             for (let i = 0; i < rounds; i++){
// //                 console.log(`Round ${i + 1}:`);
// //                 const humanSelection = getHumanChoice();
// //                 const computerSelection = getComputerChoice();
// //                 const result = playRound(humanSelection, computerSelection)
        
        
                
// //                 if (result === "human"){
// //                     humanScore++;
// //                 }
// //                 else if(result === "computer"){
// //                     computerScore++;
// //                 }
        
// //                 console.log("player score: " + humanScore);
// //                 console.log("computer score: " + computerScore);
// //             }
        
// //             if (humanScore > computerScore){
// //                 console.log("you won the game!");
// //             }
// //             else if(humanScore < computerScore){
// //                 console.log("computer won this round!");
// //             }
// //             else{
// //                 console.log("it was a tie!")
// //             }
                
// //         }
// //     });
// // });


// // function playRound(humanSelection, computerSelection) {
// //     // your code here!

// //     if (humanSelection === computerSelection){
// //         console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". it'a tie!")
// //     }
// //     else if(
// //         (humanSelection === "rock" && computerSelection === "scissors") || 
// //         (humanSelection === "scissors" && computerSelection === "paper") ||
// //         (humanSelection === "paper" && computerSelection === "rock"))
// //         {
// //         console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection +". Player 1 wins!");
// //         return "human";
// //     }
// //     else if (
// //         (humanSelection === "scissors" && computerSelection === "rock") ||
// //         (humanSelection === "paper" && computerSelection === "scissors") ||
// //         (humanSelection === "rock" && computerSelection === "paper"))
// //         {
// //         console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". Computer wins!");
// //         return "computer";
// //     }
// // }


// // function playGame(){
// //     let humanScore = 0;
// //     let computerScore = 0;
// //     let rounds = 5;

// //     for (let i = 0; i < rounds; i++){
// //         console.log(`Round ${i + 1}:`);
// //         const humanSelection = getHumanChoice();
// //         const computerSelection = getComputerChoice();
// //         const result = playRound(humanSelection, computerSelection)


        
// //         if (result === "human"){
// //             humanScore++;
// //         }
// //         else if(result === "computer"){
// //             computerScore++;
// //         }

// //         console.log("player score: " + humanScore);
// //         console.log("computer score: " + computerScore);
// //     }

// //     if (humanScore > computerScore){
// //         console.log("you won the game!");
// //     }
// //     else if(humanScore < computerScore){
// //         console.log("computer won this round!");
// //     }
// //     else{
// //         console.log("it was a tie!")
// //     }
        
// // }





















// // function playRound(humanChoice, computerChoice) {
// //     // your code here!
// //     while(userInput !== "rock" || "paper" || "scissors"){
// //         userInput = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
// //     }    
// //     else if(humanChoice === "rock" && computerChoice === "scissors" || 
// //         humanChoice === "scissors" && computerChoice === "paper" ||
// //         humanChoice === "paper" && computerChoice === "rock")
// //         {
// //         console.log("Player 1 wins!");
// //     }
// //     else if (humanChoice === "scissors" && computerChoice === "rock" ||
// //         humanChoice === "paper" && computerChoice === "scissors" ||
// //         humanChoice === "rock" && computerChoice === "paper")
// //         {
// //             console.log("Computer wins!");
// //     }
// //     else {
// //         console.log("it's a tie!")
// //     }
// // }



// // function playGame(){
// //     humanScore
// //     computerScore

// //     playRound(humanSelection, computerSelection)
// // }

// // playGame()