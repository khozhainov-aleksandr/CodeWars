'use strict';

// Get lowest sum

function getMinSum(nums) {
  if (nums.length <= 1) {
    return NaN;
  }

  const x = nums.sort((a, b) => a - b);

  return x[0] + x[1];
}

console.log( getMinSum([5]) ); // === NaN
console.log( getMinSum([1, 2]) ); // === 3
console.log( getMinSum([15, 28, 4, 2, 43]) ); // === 6