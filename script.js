'use strict'

function computerPlay() {
    let states = ["rock", "paper", "scissors"];
    let randomState = Math.floor(Math.random()*3);
    return states[randomState];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winner = compareState(playerSelection, computerSelection);
    
    if (winner === 'tie') {
        return "It's a Tie!";
    }else if(winner === "Invalid State"){
        return "Invalid Input! Please choose from Rock, Paper, Or Scissors :)";
    }else if (winner === playerSelection){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function compareState(firstState, secondState) {
    //rock > scissors
    // paper > rock
    // scissors > paper

    if(firstState === secondState) {
        return "tie";
    }
    if(firstState === "rock" || secondState === "rock") {
        if(firstState === "scissors" || secondState === "scissors") {
            return "rock";
        }
        if(firstState === "paper" || secondState === "paper"){
            return "paper";
        }
    }

    if(firstState === "scissors" || secondState === "scissors") {
        if(firstState === "paper" || secondState === "paper"){
            return "scissors";
        }
    }

    return "Invalid State"
}


function game() {
    for(let i = 0; i < 5; i++){
        console.log(playRound(prompt("Pick your weapon!", ""), computerPlay()));
    }
}

game();