'use strict';

// Calculate average

function findAverage(array) {
    return (array.toString() === '') ? 0 : array.reduce((sum, el) => (sum + el), 0) / array.length;
  }

console.log(findAverage([1,2,3])); // 2
console.log(findAverage([1,2,3,4])); // 2.5
console.log(findAverage([])); // 0