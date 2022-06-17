'use strict'

let playerScore = 0;
let compScore = 0;
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
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else {
        compScore++;
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

function resetGame(){
    buttons.forEach(btn => btn.disabled = false);
    playerScore = 0;
    compScore = 0;
    pScore.textContent = '';
    cScore.textContent = '';
    result.textContent = '';
    winner.textContent = '';
}



const pScore = document.querySelector('.player-score span');
const cScore = document.querySelector('.comp-score span');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const reset = document.querySelector('.reset');

const buttons = document.querySelectorAll('.selection');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        result.textContent = playRound(e.target.textContent,computerPlay());
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
        if(playerScore === 5){
            winner.textContent = 'PLAYER WINS! BOT LOSES! (OBVIOUSLY)';
            buttons.forEach(btn=>btn.disabled = true);
        }else if(compScore === 5){
            buttons.forEach(btn=>btn.disabled = true);
            winner.textContent = 'BOT WINS! HUMAN LOSES! (01011101101)';
        }
        // console.log(e.target.textContent);
    })
});

reset.addEventListener('click', resetGame);