'use strict';

// Map method

const numbers = [1, 2, 3, 4, 5];

numbers.myMap = function(callBack) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const callBackValue = callBack(this[i], i, this);
    result[result.length] = callBackValue;
  }

  return result;
};

const mappedNumbers = numbers.myMap(el => el + 10);
console.log( mappedNumbers ); // === [11, 12, 13, 14, 15];
console.log( numbers ); // === [1, 2, 3, 4, 5]