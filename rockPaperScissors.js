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

    //For loop: Play rock paper scissors for 3 rounds.
    for(var i = 0; i < 3; i++){

        //Get the player's choice
        const playerChoice = prompt("What's your choice? [rock/paper/scissors]"); 
         //Get the computer's choice
        const computerChoice = getComputerChoice();

        //If the user enters an invalid response, add an extra round
        if(playerChoice !== "scissors" && playerChoice !== "paper" && playerChoice !== "rock"){
            alert(`${playerChoice} is not a valid response`);
            i--;
        } else {
            //Play the round out, and get the message of either you winning, losing, or a draw
            let msg = playRound(playerChoice, computerChoice); 
            //Display the message to the user
            alert(msg); 

            // Log the player's choice and computer's choice to the console for debugging
            console.log(`player: ${playerChoice} computer: ${computerChoice}`); 
            
            //Every draw, add a point to both user and computer
            if(msg === "Draw!"){ 
                playerScore++;
                computerScore++;
            } else if(msg.includes('Win')){ // if it says You Win!
                playerScore++;
            } else { // If it says you Lose!
                computerScore++;
            }

        }
    }

    //Creating the final message for when the game is ended
    let endMsg;
    if(playerScore === computerScore){
        endMsg = `You tied!`;
    }else if(playerScore > computerScore){
        endMsg = `You won the game!` 
    } else {
        endMsg = `Better luck next time!`
    }

    //Add final scores to the final message
    endMsg += `
Player Score: ${playerScore}
Computer Score: ${computerScore}`;

    //Show the final winning/ losing message to the user
    alert(endMsg); 
}

//Play the Game on refresh/ first opening the browser window!
game(); 

  