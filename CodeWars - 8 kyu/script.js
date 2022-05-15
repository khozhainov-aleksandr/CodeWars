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

// Group by method

const numbers = [1, 1, 2, 1, 3, 3, 2, 4];

Array.prototype.groupBy = function(callback) {
  const result = {};

  for (const item of this) {
    const key = callback ? callback(item) : item;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};

const groupedNumbers = numbers.groupBy();

console.log( groupedNumbers );
