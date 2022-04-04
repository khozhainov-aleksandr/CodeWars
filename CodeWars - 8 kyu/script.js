'use strict';

// Multiply integers

function multiplyNums(nums) {
  if (nums.toString() === '') {
    return 1;
  }

  const obj = {};
  const x = [];
  const y = [];

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  for (const key in obj) {
    if (obj[key] === 2) {
      y.push(Number(key));
    }

    if (obj[key] === 1) {
      x.push(Number(key));
    }
  }

  return [...x,...x,...y].reduce((sum, el) => sum * el);
}

console.log( multiplyNums([1, 1, 1, 2, 2, 3]) ); // === 18 // 3 x 3 x 2 = 18
console.log( multiplyNums([6, 5, 4, 10, 6, 5, 4, 10, 6, 5, 4, 20]) ); // === 4000 // 20 x 20 x 10 = 4000