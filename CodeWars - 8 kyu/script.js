'use strict';

// Count all pairs

function countPairs(nums) {
  const obj = {};
  let sum = 0;

  if (nums.length === 1 || nums.length === 0) {
    return 0;
  }

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });
  
  for (const key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum / 2;
}
console.log( countPairs([1]) ); // === 0
console.log( countPairs([0, 0, 0, 0]) ); // === 2
console.log( countPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) ); // === 4