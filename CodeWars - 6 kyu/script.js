'use strict';

// Remove number

function removeNumber(nums, target) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {

    if (nums[i-1] + nums[i] !== target) {
      res.push(nums[i]);
    }
  }

  return res;
}

console.log( removeNumber([1, 2, 3, 4, 5], 3) ); // === [1, 3, 4, 5]
// 1 + 2 = target, удаляем 2.

console.log( removeNumber([2, 2, 2, 1, 3], 4) ); // === [2, 1]
// 2 + 2 = target, 2 + 2 = target, 1 + 3 = target, удаляем 2, 2 и 3.

console.log( removeNumber([4, -4, 9], 0) ); // === [4, 9]
// 4 - 4 = target, удаляем -4.