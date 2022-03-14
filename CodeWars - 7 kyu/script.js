'use strict';

// Move zeros

function moveZeros(arr) {
  const noZero = arr.filter(el => el !== 0);
  const rep = arr.length - noZero.length;
  const res = noZero;

  for (let i = 0; i < rep; i++) {
    res.push(0);
  }

  return res;
}

console.log( moveZeros([0]) ); // === [0]
console.log( moveZeros([0, 0, 1, 2]) ); // === [1, 2, 0, 0]
console.log( moveZeros([true, 0, 'abc', '1', 12]) ); // === [true, 'abc', '1', 12, 0]