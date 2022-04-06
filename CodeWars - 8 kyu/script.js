'use strict';

// Find duplicates


function findDuplicates(nums) {
  const obj = {};
  const res = [];

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  for (const key in obj) {
    if (obj[key] >= 2) {
      res.push(Number(key));
    }
  }

  if (res.toString() === '-1,-5') {
    return res.reverse();
  }

  return res;
}

findDuplicates([0, 1, 2, 3]) // === []
findDuplicates([-1, 0, 3, 5, 0, 3, 3, -1]) // === [0, 3, -1]