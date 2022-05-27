'use strict';

/* 
// Missing number

function findMissingNumber(nums) {
  const numsSort = nums.sort();
  const acc = [];

  for (let i = 0; i <= nums.length; i++) {
    acc.push(i);
  }

  const res = acc.filter(el => !numsSort.includes(el))[0];

  return res;
}

console.log( findMissingNumber([3,2,5,0,6,4,1]) ); // 7
console.log( findMissingNumber([1,3,8,2,7,0,9,4,6]) ); // 5
console.log( findMissingNumber([4,7,2,3,1,0,5]) ); // 6
*/




// Find parity outlier

function findOutlier(nums) {
  const even = nums.filter(el => el % 2 === 0)
  const odd = nums.filter(el => el % 2 !== 0)

  if (even.length > odd.length) {
    return odd[0];
  } else if (even.length < odd.length) {
    return even[0];
  }
}

console.log( findOutlier([0, 1, 2]) ); // === 1
console.log( findOutlier([1, 2, 3]) ); // === 2
console.log( findOutlier([2, 6, -8, 10, -3]) ); // === -3
console.log( findOutlier([1, 1, 0, 1, 1]) ); // === 0
console.log( findOutlier([-993,-5,-84,-33,-12345]) ); // === -84

