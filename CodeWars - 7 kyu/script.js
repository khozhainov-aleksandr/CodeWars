'use strict';

// Square digits

function squareDigits(num) {
  return Number(String(num).split('').map(el => Number(el) * Number(el)).join(''));
}

console.log( squareDigits(58)  ); // === 2564