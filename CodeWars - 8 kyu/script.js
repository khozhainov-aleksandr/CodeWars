'use strict';

// Swap array elements

// const array = [1, 2, 3, 4, 5];

// function swapArray(array, i, j) {
//   const oldNum = array[j];

//   array[i] = oldNum;
//   array[j] = 5;

//   return array;
// }

// console.log( swapArray(array, 4, 2) ); // [1, 2, 5, 4, 3]
// console.log( swapArray(array, 1, 2) ); // [1, 5, 2, 4, 3]
// console.log( swapArray(array, 0, 1) ); // [5, 1, 2, 4, 3]

// --------------------------------------------------------------------------------------------------------------------------- //

numbers.range = function(start, count) {
  const res = [];
  let counts = start;

  for (let i = 0; i < count; i++) {
    res.push(counts++);
  }

  return res;
};

Array.prototype.sum = function() {
  return this.reduce((sum, el) => sum + el, 0);
};

console.log( Array.range(0, 3) ); // === [0, 1, 2]
console.log( [0, 1, 2].sum() ); // === 3
console.log( Array.range(-1, 4).sum() ); // === 2