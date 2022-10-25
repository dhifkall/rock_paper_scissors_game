function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return `Draw!`;
    } else if((playerSelection === "rock" && computerSelection ==="scissors") || 
    (playerSelection === "paper" && computerSelection ==="rock") ||
    (playerSelection === "scissors" && computerSelection ==="paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${playerSelection} loses to ${computerSelection}`
    }

  }
  
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    } if (choice == 1){
        return "paper";
    } if(choice == 2) {
        return "scissors";
    }
}
  
function game(){
    //Keep track of the scores, to see who wins!
    let playerScore = 0;
    let computerScore = 0;

    //For loop: Play rock paper scissors for 3 rounds. Every draw, add an extra round to make sure there are 3 matches
    for(var i = 0; i < 3; i++){

        const playerChoice = prompt("What's your choice? [rock/paper/scissors]"); //Get the player's choice
        const computerChoice = getComputerChoice(); //Get the computer's choice

        let msg = playRound(playerChoice, computerChoice); //Play the round out, and get the message of either you winning, losing, or a draw
        alert(msg); //Display the message to the user

        console.log(`player: ${playerChoice} computer: ${computerChoice}`); // log the player's choice and computer's choice to the console

        if(msg === "Draw!"){ //if it is a draw, decrement i to add another round to the game
            i--;
        } else if(msg.charAt(4) ==='W'){ // if it says You Win!
            playerScore++;
        } else { // If it says you Lose! Not a win and not a draw
            computerScore++;
        }

    }

    let endMsg; //Creating the final message for when the game is ended
    if(playerScore > computerScore){
         endMsg = `You won the game!` 
    } else {
        endMsg = `Better luck next time!`
    }
    endMsg += `
Player Score: ${playerScore}
Computer Score: ${computerScore}`;

    alert(endMsg); //Show the final winning/ losing message to the user
}

game(); //Play the Game on refresh/ first opening the browser window!

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
  