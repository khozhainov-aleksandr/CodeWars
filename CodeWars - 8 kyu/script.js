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

// Find odd

function findOdd(nums) {
  const obj = {};

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return key;
    }
  }
}

console.log( findOdd([1]) ); // === 1
console.log( findOdd([2, 2, 2, 2, 10]) ); // === 10 // число 10 встречается 1 раз
console.log( findOdd([-20, 2, 2, 3, 3, 5, 5, 4, -20, 4, 5]) ); // // число 5 встречается 3 раза