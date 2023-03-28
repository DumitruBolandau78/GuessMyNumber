"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.querySelector(".check"),
        answer = document.querySelector(".answer"),
        playAgainBtn = document.querySelector(".again"),
        numberInput = document.getElementById("number"),
        startGuessing = document.querySelector(".start-guess"),
        score = document.querySelector(".score"),
        highscore = document.querySelector(".high-score");

    let randomNumber = Math.floor(Math.random() * 20 + 1),
        scoreCounter = 20,
        highscoreCounter = 0;

    score.innerHTML = `💯 Score: ${scoreCounter}`;
    highscore.innerHTML = `🏅 Highscore: `;

    function getRandomNumber() {
        randomNumber = Math.floor(Math.random() * 20 + 1);
    }

    checkBtn.addEventListener("click", verifyWin);

    function verifyWin() {
        if (numberInput.value < 0 || numberInput.value > 20) {
            alert("Please insert a number between 1 and 20!");
            numberInput.value = "";
            return;
        }
        if (numberInput.value == randomNumber) {
            document.body.style.backgroundColor = "rgb(0, 184, 0)";
            startGuessing.textContent = "🎉 Correct number!";
            answer.textContent = `${randomNumber}`;
            getRandomNumber();

            if (highscoreCounter < scoreCounter) {
                highscoreCounter = scoreCounter;
            }

            highscore.innerHTML = `🏅 Highscore: ${highscoreCounter}`;
            checkBtn.removeEventListener("click", verifyWin);
        } else if (numberInput.value > randomNumber) {
            startGuessing.textContent = "📈 Too high!";
            scoreCounter--;
            score.innerHTML = `💯 Score: ${scoreCounter}`;
        } else if (numberInput.value < randomNumber) {
            startGuessing.textContent = "📉 Too low!";
            scoreCounter--;
            score.innerHTML = `💯 Score: ${scoreCounter}`;
        }
    }

    numberInput.addEventListener("input", () => {
        numberInput.value = numberInput.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    });

    playAgainBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "rgb(41, 41, 41)";
        scoreCounter = 20;
        score.innerHTML = `💯 Score: ${scoreCounter}`;
        startGuessing.textContent = "Start guessing...";
        answer.textContent = "?";
        numberInput.value = "";
        checkBtn.addEventListener("click", verifyWin);
    });
});