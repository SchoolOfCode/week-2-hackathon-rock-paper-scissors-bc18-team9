let userScore = 0;
let computerScore = 0;
let playAgain = true;

while (playAgain === true) {
let userInput = prompt("Welcome to the game! Which would you like to choose? Rock, paper or scissors?");
const gameChoices = ['rock', 'paper', 'scissors']
let computerInput = gameChoices[Math.floor(Math.random()*gameChoices.length)]
console.log(computerInput)


if (userInput === "rock" && computerInput === "paper"){
    alert("You lose!");
    computerScore++;
    userScore--;
}
else if (userInput === "rock" && computerInput === "scissors"){
    alert("You win!")
    computerScore--;
    userScore++;
}
else if (userInput === "paper" && computerInput === "rock"){
    alert("You win!")
    computerScore--;
    userScore++;
}
else if (userInput === "paper" && computerInput === "scissors"){
    alert("You lose!")
    computerScore++;
    userScore--;
}
else if (userInput === "scissors" && computerInput === "rock"){
    alert("You lose!")
    computerScore++;
    userScore--;
}   
else if (userInput === "scissors" && computerInput === "paper"){
    alert("You win!")
    computerScore--;
    userScore++;
}  
else if (userInput === computerInput){
    alert("It's a tie!")
}  
else { 
    alert(`It's called rock, paper, scissors, not ${userInput}, paper, scissors`)
}

alert (`Your score is ${userScore} and the computer's score is ${computerScore}`)

}


// create a variable to check game state true/false
// add a while loop 
// continue while true
// escape if false