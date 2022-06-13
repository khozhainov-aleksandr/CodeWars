'use strict';
/* 
// Remove duplicates from sorted array

function removeDuplicates(nums) {
  for (let i = 0; i < 10; i++) {
    nums.forEach((element, index, arr) => {
      if (arr[index] === arr[index - 1]) {
        nums.splice(index, 1);
      }
    });
  }

  return nums.length;
}

console.log( removeDuplicates([1, 2, 3, 3]) ); // === 3 // nums = [1, 2, 3]
console.log( removeDuplicates([0, 0, 0, 1, 6, 7, 7]) ); // === 4 // nums = [0, 1, 6, 7]
console.log( removeDuplicates([-9, -8, -7]) ); // === 3 // nums = [-9, -8, -7]
console.log( removeDuplicates([4, 4, 4]) ); // === 1 // nums = [4]
*/
/* 
// Plus one

function addOne(digits) {
  const sum = Number(digits.join('')) + 1;
  const str = sum.toString().split('').map(el => Number(el));
  
  return str;
}

console.log( addOne([1, 3, 7]) ); // === [1, 3, 8] // 137 + 1 = 138
console.log( addOne([2, 9]) ); // === [3, 0] // 29 + 1 = 30
console.log( addOne([0]) ); // === [1] // 0 + 1 = 1
*/

/* 
// Majority element

function findMajor(nums) {
  const obj = {};

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  const x = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return +x[0][0]
}

console.log( findMajor([7, 6, 7]) ); // === 7
console.log( findMajor([2, 2, 1, 1, 2, 1, 2]) ); // === 2

console.log( findMajor([40]) ); // === 40
*/

