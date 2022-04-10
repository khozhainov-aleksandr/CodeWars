'use strict';

// Find method

const numbers = [1, 2, 3, 4, 10, 8];

numbers.myFind = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    const x = callBack(this[i], i, this);

    if (x) {
      return this[i];
    }
  }
};

const foundNumber = numbers.myFind(el => el > 4);

console.log( foundNumber ); // === 10;
console.log( numbers ); // === [1, 2, 3, 4, 10, 8]