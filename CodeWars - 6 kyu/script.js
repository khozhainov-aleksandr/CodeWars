'use strict';

// Sequence generator

function generateSequence(num, pattern) {
  const res = [];

  if (num === 1 && typeof pattern !== 'function') {
    return [''];
  }

  if (num === 1) {
    return [-1];
  }

  if (pattern === undefined) {
    res.length = num;

    return res.fill(undefined);
  }

  if (typeof pattern !== 'function') {
    res.length = num;

    return res.fill(pattern);
  }

  const funcNumber = +pattern.toString().split(' ').reverse()[0];
  const symbol = pattern.toString().split(' ').reverse()[1];
  let sum = 0;

  for (let index = 0; index < num; index++) {
    if (typeof pattern === 'function') {
      switch (symbol) {
        case '+': sum = funcNumber + index; break;
        case '-': sum = funcNumber - index; break;
        case '*': sum = funcNumber * index; break;
        case '/': sum = funcNumber / index; break;
      }

      res.push(sum);
    }
  }

  return res;
}

console.log( generateSequence(3) ); // === [4, 4, 4]
// console.log( generateSequence(5, {}) ); // === [{}, {}, {}, {}, {}]
// console.log( generateSequence(2, 's') ); // === ['s', 's']
// console.log( generateSequence(5, i => i * 3) ); // === [0, 3, 6, 9, 12]
// console.log( generateSequence(3, i => i + 10) ); // === [10, 11, 12]