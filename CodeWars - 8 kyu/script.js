'use strict';

// Arrays intersection

function findIntersection(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
      }
    }
  }

  return res.sort((a, b) => a - b).filter((el, i, arr) => el !== arr[i + 1]);
}

console.log( findIntersection([1, 2, 3], [3, 6, 9]) ); // === [3]
console.log( findIntersection([1, 2, 2, 1], [2, 2]) ); // === [2]
console.log( findIntersection([-2, -2, -1, 0, 1], [0, -1, -1, 3, 4]) ); // === [-1, 0] // [0, -1] также принимается