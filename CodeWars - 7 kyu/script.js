'use strict';

// Find the next perfect square!

function findNextSquare(square) {
    const nextSquare = Math.sqrt(square) + 1;
    return ((Math.sqrt(square) % 1) === 0) ? nextSquare * nextSquare : -1;
}

console.log( findNextSquare(121) ); // 144
console.log( findNextSquare(319225) ); // 320356
console.log( findNextSquare(155) ); // -1