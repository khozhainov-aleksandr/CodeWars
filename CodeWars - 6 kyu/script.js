'use strict';

// Filter method

// const numbers = [1, 2, 3, 4, 5];
const numbers = [0, 10, 20, 30];

numbers.myFilter = function(callBack) {
  const result = [];
  let count = 0;

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      result[count] = this[i];
      count += 1;
    }
  }

  return result;
};

// const filteredNumbers = numbers.myFilter(el => el > 2);
const filteredNumbers = numbers.myFilter((item, index) => index > 0);

console.log( filteredNumbers ); // === [3, 4, 5];
// console.log( numbers ); // === [1, 2, 3, 4, 5]
