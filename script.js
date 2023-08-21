"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number chosen!";
  } else {
    if (guess === secretNum) {
      if (score > 0) {
        displayMessage("You got it!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNum;
        // Set hiscore
        if (score > highScore) {
          highScore = score;
          document.querySelector(".highscore").textContent = highScore;
        }
      } else {
        displayMessage("You got it, but you have 0 pts, GAME OVER!");
      }
    } else if (guess !== secretNum) {
      if (score > 1) {
        displayMessage(guess > secretNum ? "Too High!" : "Too Low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("0 pts, GAME OVER!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // set score back to 20
  score = 20;
  document.querySelector(".score").textContent = score;
  // turn screen back to black
  document.querySelector("body").style.backgroundColor = "#222";
  // turn number back to ?
  document.querySelector(".number").textContent = "?";
  // turn width of box back to 15 rem
  document.querySelector(".number").style.width = "15rem";
  // refresh secretNum
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  secretNum = Math.trunc(Math.random() * 20) + 1;
});
