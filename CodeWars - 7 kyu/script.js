'use strict';

// Sum in row

function sumInRow(n) {
  if (Math.sign(n) === -1) {
    return 0;
  }

  const lastNumber = n * n + n - 1;
  const res = [];

  for (let i = 1; i <= lastNumber; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }

  return res
    .reverse()
    .slice(0, n)
    .reverse()
    .reduce((sum, el) => sum + el, 0);
}

console.log( sumInRow(1) ); // 1
console.log( sumInRow(2) ); // 8