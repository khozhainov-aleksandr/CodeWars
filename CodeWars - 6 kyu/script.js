'use strict';

// Find smaller digits

function findSmallerDigits(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        sum++;
      }
    }
    resultArr.push(sum);
  }

  return resultArr;
}

console.log( findSmallerDigits([5, 4, 3, 2, 1]) ); // [4, 3, 2, 1, 0]
console.log( findSmallerDigits([1, 2, 0]) ); // [1, 1, 0]
console.log( findSmallerDigits([1, 1, -1, 0, 0]) ); // [3, 3, 0, 0, 0]
console.log( findSmallerDigits([5, 4, 7, 9, 2, 4, 4, 5, 6]) ); // [4, 1, 5, 5, 0, 0, 0, 0, 0]