'use strict';


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
