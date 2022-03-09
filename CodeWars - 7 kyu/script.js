'use strict';

// Fibonacci number

function getFibonacciNumber(n) {
    if (n === 0) {
      return 0;
    }

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
      const c = a + b;

      a = b;
      b = c;
    }

    return b;
  }

console.log( getFibonacciNumber(0) ); // === 0
console.log( getFibonacciNumber(1) ); // === 1
console.log( getFibonacciNumber(2) ); // === 1
console.log( getFibonacciNumber(3) ); // === 2
console.log( getFibonacciNumber(4) ); // === 3
console.log( getFibonacciNumber(5) ); // === 5
console.log( getFibonacciNumber(10) ); // === 55