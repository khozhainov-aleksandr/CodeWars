'use strict';

// Rock Paper Scissors!

function rps(paper1, paper2) {
    if (paper1 === paper2) { return 'Draw!'; }
    if ((paper1 === 'rock' && paper2 == 'scissors') || (paper1 === 'scissors' && paper2 == 'paper') || (paper1 === 'paper' && paper2 == 'rock')) { return 'Player 1 won!'; }
    if ((paper1 === 'scissors' && paper2 == 'rock') || (paper1 === 'paper' && paper2 == 'scissors') || (paper1 === 'rock' && paper2 == 'paper')) { return 'Player 2 won!'; }
}

console.log(rps('rock', 'scissors')); // Player 1 won!
console.log(rps('scissors', 'paper')); // Player 1 won!
console.log(rps('paper', 'rock')); // Player 1 won!

console.log(rps('scissors', 'rock')); // Player 2 won!
console.log(rps('paper', 'scissors')); // Player 2 won!
console.log(rps('scissors', 'rock')); // Player 2 won!

console.log(rps('rock', 'rock')); // Draw!
console.log(rps('scissors', 'scissors')); // Draw!
console.log(rps('paper', 'paper')); // Draw!