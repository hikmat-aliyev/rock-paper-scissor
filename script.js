// get random number between 0 and 2 as we have 3 choices
let random_number;
let computerSelection;

//create function which returns rock, paper, scissor based on the random number
function getComputerChoice (random_number) {
    let compChoice;
    if (random_number === 0) {
        compChoice = "Rock"
    }
    else if (random_number === 1) {
        compChoice = "Paper"
    }
    else {
        compChoice = "Scissor"
    }
    return compChoice;
}

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".btn ");

let playerSelection = buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        playerSelection = event.target.value;
    });
});


buttons.forEach(button => button.addEventListener("click", function(){
    random_number = Math.floor(Math.random() * 3);
    computerSelection = getComputerChoice(random_number);
    console.log(`player choice is ${playerSelection}`);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}));

let scoreArray = [playerScore, computerScore];
//create function which plays 1 round and returns the result of it
function playRound (playerSelection, computerSelection) {
    let result = document.getElementById("h2");
    let reason = document.getElementById("h3");
        if(typeof playerSelection === "string"){
            
            if (playerSelection.toUpperCase() === "ROCK") {
                if (computerSelection === "Rock") {
                    result.textContent = "It's a tie!";
                    reason.textContent = "Same weapon"
                    }
        
                else if (computerSelection === "Paper") { 
                    computerScore ++;
                    console.log(`Computer score is ${computerScore}`);
                    result.textContent = "You lost"
                    reason.textContent = "Paper covers rock"         
                    }
        
                else {
                    playerScore ++; 
                    console.log(playerScore);
                    result.textContent = "You win"
                    reason.textContent = "Rock destroys scissor"
                }
            }
        
                else if(playerSelection.toUpperCase() === "PAPER"){
                if (computerSelection === "Paper") 
                { 
                    result.textContent = "It's a tie!";
                    reason.textContent = "Same weapon"
                }

                else if (computerSelection === "Scissor") {
                    computerScore ++; 
                    console.log(`Computer score is ${computerScore}`);
                    result.textContent = "You lost"
                    reason.textContent = "Scissor cuts paper" 
                }
                
                else {
                    playerScore ++; 
                    console.log(playerScore);
                    result.textContent = "You win"
                    reason.textContent = "Paper covers rock"
                }

            }
        
            else if(playerSelection.toUpperCase() === "SCISSOR"){
                if (computerSelection === "Scissor") { 
                    result.textContent = "It's a tie!";
                    reason.textContent = "Same weapon"
                }
                else if (computerSelection === "Rock") {
                    computerScore ++; 
                    console.log(`Computer score is ${computerScore}`);
                    result.textContent = "You lost" 
                    reason.textContent = "Rock destroys scissor"
                }
                else {
                    playerScore ++;
                    console.log(playerScore);
                    result.textContent = "You win" 
                    reason.textContent = "Scissor cuts paper"
                }
            }
        }

        if (computerScore === 5 && playerScore < 5) {
            document.querySelector(".result").textContent = "You lost!";
        }
        else if(playerScore === 5 && computerScore < 5) {
            document.querySelector(".result").textContent = "You win!"; 
        }
    }


//change question mark images to relevant choice images
buttons.forEach(button => button.addEventListener("click", function(){
    let playerImage = document.getElementById("playerImage");
    if (playerSelection.toUpperCase() === "ROCK") {
        playerImage.src = "rock.png"
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        playerImage.src = "paper.png"
    }
    else if (playerSelection.toUpperCase() === "SCISSOR") {
        playerImage.src = "scissor.png"
    }

    let computerImage = document.getElementById("computerImage");
    if (computerSelection === "Rock") {
       computerImage.src = "rock.png"
    }
    else if (computerSelection === "Paper") {
        computerImage.src = "paper.png"
    }
    else if (computerSelection === "Scissor") {
        computerImage.src = "scissor.png"
    }
}));

//change score texts 
buttons.forEach(button => button.addEventListener("click", function(){
    document.getElementById("playerScore").textContent = `You:${playerScore}`
    document.getElementById("computerScore").textContent = `Computer:${computerScore}`  
}));

const audio = new Audio("click.mp3");
const gameOverAudio = new Audio("gameover.mp3")
//playing button sounds and game over sound
buttons.forEach(button => {
    button.addEventListener("click", () => {
    if(computerScore < 5 && playerScore < 5){
        audio.currentTime = 0;
        audio.play();
    }
    else if(computerScore === 5 || playerScore === 5){
        gameOverAudio.play();
    }
    });
  });

