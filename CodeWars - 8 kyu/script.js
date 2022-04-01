'use strict';

// Find single number

function findSingleNum(nums) {
  const obj = {};

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  for (const key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}

console.log( findSingleNum([1]) ); // === 1
console.log( findSingleNum([3, 3, 2]) ); // === 2
console.log( findSingleNum([4, 1, 2, 1, 2]) ); // === 4