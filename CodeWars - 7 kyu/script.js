'use strict';

// Sum of multiples

function sumOfMultiples(num) {
  const res = [];

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res.push(i);
    }
  }

  return res.reduce((sum , el)=> sum + el, 0);
}

console.log( sumOfMultiples(-1) ); // === 0
console.log( sumOfMultiples(2) ); // === 0
console.log( sumOfMultiples(10) ); // === 14 // 3 + 5 + 6 + 9 = 23
console.log( sumOfMultiples(12) ); // === 33 // 3 + 5 + 6 + 9 + 10 = 33