console.log("hello, world!");


function getComputerChoice(){
    const getRandom = Math.floor(Math.random() * 3) + 1;

    if (getRandom === 1){
        return "rock";
    }
    else if(getRandom === 2){
        return "paper";
    }
    else if(getRandom === 3){
        return "scissors";
    }
}


function getHumanChoice(){
    let userInput = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    while(userInput !== "rock" && userInput !=="paper" && userInput !== "scissors"){
       userInput = prompt("Invalid input. Please enter Rock, Paper, or Scissors: ").toLowerCase();
    }
   return userInput;
}


function playRound(humanSelection, computerSelection) {
    // your code here!

    if (humanSelection === computerSelection){
        console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". it'a tie!")
    }
    else if(
        (humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock"))
        {
        console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection +". Player 1 wins!");
        return "human";
    }
    else if (
        (humanSelection === "scissors" && computerSelection === "rock") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "rock" && computerSelection === "paper"))
        {
        console.log("you picked: " + humanSelection + ", and computer picked: " + computerSelection + ". Computer wins!");
        return "computer";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    for (let i = 0; i < rounds; i++){
        console.log(`Round ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection)


        
        if (result === "human"){
            humanScore++;
        }
        else if(result === "computer"){
            computerScore++;
        }

        console.log("player score: " + humanScore);
        console.log("computer score: " + computerScore);
    }

    if (humanScore > computerScore){
        console.log("you won the game!");
    }
    else if(humanScore < computerScore){
        console.log("computer won this round!");
    }
    else{
        console.log("it was a tie!")
    }
        
}


playGame()


















// function playRound(humanChoice, computerChoice) {
//     // your code here!
//     while(userInput !== "rock" || "paper" || "scissors"){
//         userInput = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
//     }    
//     else if(humanChoice === "rock" && computerChoice === "scissors" || 
//         humanChoice === "scissors" && computerChoice === "paper" ||
//         humanChoice === "paper" && computerChoice === "rock")
//         {
//         console.log("Player 1 wins!");
//     }
//     else if (humanChoice === "scissors" && computerChoice === "rock" ||
//         humanChoice === "paper" && computerChoice === "scissors" ||
//         humanChoice === "rock" && computerChoice === "paper")
//         {
//             console.log("Computer wins!");
//     }
//     else {
//         console.log("it's a tie!")
//     }
// }



// function playGame(){
//     humanScore
//     computerScore

//     playRound(humanSelection, computerSelection)
// }

// playGame()