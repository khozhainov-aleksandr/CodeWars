'use strict';

// You're a square!

function isSquare(number){
    return Math.sqrt(number) % 1 === 0;
}

console.log( isSquare(25) ); // true
console.log( isSquare(26) ); // false