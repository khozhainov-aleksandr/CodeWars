'use strict';

// Largest pair sum in array

function largestPairSum (numbers) {
  return numbers.sort((a,b)=> b-a).slice(0, 2).reduce((sum,el)=> sum+el,0);
}

console.log( largestPairSum([10, 14, 2, 23, 19]) ); // 42 (= 23 + 19)
console.log( largestPairSum([99, 2, 2, 23, 19]) ); // 122 (= 99 + 23)