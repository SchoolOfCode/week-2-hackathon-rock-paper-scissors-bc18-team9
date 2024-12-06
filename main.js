let userScore = 0;
let computerScore = 0;
let playAgain = true;

alert("Welcome to our Rock, Paper, Scissors Game!");

while (playAgain === true) {
let userInput = prompt("Which would you like to choose? Rock, paper or scissors?");
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

playAgain = confirm("Do you want to play again?")
console.log(playAgain)

}

alert(`Thank you for playing! Your final score is ${userScore} and the computer's final score ${computerScore}`)


// Either we create one that's more generic
// or we add two versions

// or we create a new alert before the while loop that jest says "welcome to the game"
// Also then amend the alert in the while loop
// Ran through whole game - succesfully created our first MVP!
// spotted another potential stretch - add "Your final position" to the final score alert 
