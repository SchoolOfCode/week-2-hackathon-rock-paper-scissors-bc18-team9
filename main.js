let userScore = 0;
let computerScore = 0;
let playAgain = true;

let gamesLost = 0;
let gamesWon = 0;
let gamesTied= 0;
let gamesPlayed = 0;

alert("Welcome to our Rock, Paper, Scissors Game!");

while (playAgain === true) {
let userInput = prompt("Which would you like to choose? Rock, paper or scissors?");
const gameChoices = ['rock', 'paper', 'scissors']
let computerInput = gameChoices[Math.floor(Math.random()*gameChoices.length)]
console.log(computerInput)

alert (`You've picked ${userInput}, I have picked ${computerInput}`);

if (userInput === "rock" && computerInput === "paper"){
    alert("You lose!");
    computerScore++;
    userScore--;
    gamesLost++;
}
else if (userInput === "rock" && computerInput === "scissors"){
    alert("You win!")
    computerScore--;
    userScore++;
    gamesWon++;
}
else if (userInput === "paper" && computerInput === "rock"){
    alert("You win!")
    computerScore--;
    userScore++;
    gamesWon++;
}
else if (userInput === "paper" && computerInput === "scissors"){
    alert("You lose!")
    computerScore++;
    userScore--;
    gamesLost++;
}
else if (userInput === "scissors" && computerInput === "rock"){
    alert("You lose!")
    computerScore++;
    userScore--;
    gamesLost++;
}   
else if (userInput === "scissors" && computerInput === "paper"){
    alert("You win!")
    computerScore--;
    userScore++;
    gamesWon++;
}  
else if (userInput === computerInput){
    alert("It's a tie!")
    gamesTied++;
}  
else { 
    alert(`It's called rock, paper, scissors, not ${userInput}, paper, scissors`)
}
alert (`Your score is ${userScore} and the computer's score is ${computerScore}`)

gamesPlayed++;
playAgain = confirm("Do you want to play again?")

}



alert(`Thank you for playing! Your final score is ${userScore} and the computer's final score ${computerScore}`)
alert(`You played ${gamesPlayed} games, you lost ${gamesLost} games, you won ${gamesWon} games and you tied ${gamesTied} games`)
