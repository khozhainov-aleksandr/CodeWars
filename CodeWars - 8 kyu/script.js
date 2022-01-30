'use strict';

// Sum Arrays

function sum(numbers) {
  return numbers.reduce((sum, el) => (sum + el), 0);
}

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2