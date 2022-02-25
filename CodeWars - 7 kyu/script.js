'use strict';

// Sum of sequence

function calcSequenceSum(start, end, step) {
  let res = 0;

  for (let i = start; i <= end; i += step) {
    res += i;
  }

  return res;
}

console.log( calcSequenceSum(1, 5, 1) ); // 15
// console.log( calcSequenceSum(4, 15, 3) ); // 12 // 4 + 7 + 10 + 13