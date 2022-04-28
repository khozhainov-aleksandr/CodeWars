'use strict';

// Count ones in segment

function countOnes(start, end) {
  const sum = [];

  for (let i = start; i <= end; i++) {
    sum.push(i.toString(2).split('').filter(el => el !== '0'));
  }

  return sum.flat().length;
}

console.log( countOnes(4, 7) ); // === 8