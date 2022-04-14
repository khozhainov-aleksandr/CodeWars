'use strict';

// Pretty array

function isArrayPretty(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    const big = numbers[i] + 1;
    const small = numbers[i] - 1;

    const res = numbers.some(el => el === big || el === small);

    if (!res) {
      return false;
    }
  }

  return true;
}

console.log( isArrayPretty([2, 10, 9, 3]) ); // true
console.log( isArrayPretty([5, 6, 7]) ); // true
console.log( isArrayPretty([6, 7, 1]) ); // false