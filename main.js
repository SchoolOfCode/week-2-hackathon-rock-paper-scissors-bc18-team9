let userInput = prompt("Welcome to the game! Which would you like to choose? Rock, paper or scissors?");
let userScore = 0;
let computerScore = 0;


    const gameChoices = ['rock', 'paper', 'scissors']
    let computerInput = gameChoices[Math.floor(Math.random()*gameChoices.length)]
    console.log(computerInput)


if (userInput === "rock" && computerInput === "paper"){
    alert("You lose!");
}
else if (userInput === "rock" && computerInput === "scissors"){
    alert("You win!")
}
else if (userInput === "paper" && computerInput === "rock"){
    alert("You win!")
}
else if (userInput === "paper" && computerInput === "scissors"){
    alert("You lose!")
}
else if (userInput === "scissors" && computerInput === "rock"){
    alert("You lose!")
}   
else if (userInput === "scissors" && computerInput === "paper"){
    alert("You win!")
}  
else if (userInput === computerInput){
    alert("It's a tie!")
}  
else { 
    alert(`It's called rock, paper, scissors, not ${userInput}, paper, scissors`)
}

alert (`Your score is ${userScore}, the computer score is ${computerScore}`)


