'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const reset = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscoreNumber = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    message.textContent = 'Please insert number!';

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscore.textContent = highscoreNumber;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }
  }
});

reset.addEventListener('click', function () {
  scoreNumber = 20;
  score.textContent = scoreNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
