'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'my number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 12;
let number = Math.trunc(Math.random() * 20);
// console.log(number);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('.score').textContent = score;
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too High';
    score = score - 1;
    // console.log(score);
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too Low';
    score = score - 1;
    // console.log(score);
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20);
  document.querySelector('.guess').value = null;
  // console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
