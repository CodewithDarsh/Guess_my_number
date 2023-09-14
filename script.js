'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'correct number...')
// );
// document.querySelector('.number').textContent = '2';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = 34;
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMsg = function (mesage) {
  document.querySelector('.message').textContent = mesage;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when no input.....................................................
  if (!guess) {
    document.querySelector('.message').textContent = 'No NUmber!!';
    // when guess match...........................................
  } else if (guess === secretNumber) {
    displayMsg('Correct Number..!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is low .............................................
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess < secretNumber ? 'too low' : 'too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('you lost the game..!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when the guess is high..................................................
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'to high...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'u lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  displayMsg('Start Guessing..!');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'rgb(121, 86, 86)';
});
