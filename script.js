"use strict";

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");


let secretNumber = Math.trunc(Math.random()*20);

let updateScore = 20;

function checkNumber(){

    let guessNumber = Number(guess.value);
    if(!guessNumber){
        message.textContent = "Not a Number"
    }else if(guessNumber === secretNumber) {
        message.textContent = "Correct Number !"
        number.textContent = secretNumber
        highScore.textContent = updateScore;
        document.body.style.background = "green"
    }else if(guessNumber > secretNumber){
        if(updateScore > 1){
            message.textContent = "Too High";
            updateScore--;
            score.textContent = updateScore;
        }else{
            number.textContent = secretNumber;
            message.textContent = "You lost the game !";
            score.textContent = 0
        }
    }else if(guessNumber < secretNumber){
        if (updateScore > 1) {
            updateScore--;
            score.textContent = updateScore;
            message.textContent = "Too Low !";
        }else{
            number.textContent = secretNumber;
            message.textContent = "You lost the game !";
            score.textContent = 0;
        }
    }
}

check.addEventListener("click", checkNumber)

function reset(){
       updateScore = 20;
       secretNumber = Math.trunc(Math.random() * 20);
       message.textContent = "Start guessing...";
       score.textContent = updateScore;
       number.textContent = "?";
       guess.value = '';
       document.body.style.background = "";
}

again.addEventListener('click', reset);