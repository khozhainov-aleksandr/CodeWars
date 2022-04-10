'use strict';

// Some method

const numbers = [1, 2, 3, 4, 10, 8];

numbers.every = function(callBack) {
  let count = 0;

  for (let i = 0; i < this.length; i++) {
    const element = callBack(this[i], i, this);

    if (element) {
      count++;
    }
  }

  if (count === this.length) {
    return true;
  } else {
    return false;
  }
};

const allNumbersArePositive = numbers.every(el => el > 0);

console.log( allNumbersArePositive ); // === true;