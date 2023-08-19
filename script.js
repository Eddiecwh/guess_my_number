"use strict";

const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNum;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number chosen!";
  } else {
    if (guess === secretNum) {
      if (score > 0) {
        document.querySelector(".message").textContent = "You got it!";
      } else {
        document.querySelector(".message").textContent =
          "You got it, but you have 0 pts, GAME OVER!";
      }
    } else if (guess > secretNum) {
      if (score > 0) {
        document.querySelector(".message").textContent = "Too High!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "0 pts, GAME OVER!";
      }
    } else {
      if (score > 0) {
        document.querySelector(".message").textContent = "Too Low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "0 pts, GAME OVER!";
      }
    }
  }
});
