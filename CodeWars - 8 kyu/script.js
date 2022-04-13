'use strict';

// Multiply all elements

function multiplyAll(arr) {
  return (num) => {
    return arr.map(element => element * num);
  };
}

console.log("🔥 => multiplyAll([])(5)", multiplyAll([])(5)); // === []
console.log("🔥 => multiplyAll([1, 2, 3])(0)", multiplyAll([1, 2, 3])(0)); // === [0, 0, 0]
console.log("🔥 => multiplyAll([9, 10, 11])(2)", multiplyAll([9, 10, 11])(2)); // === [18, 20, 22]
console.log("🔥 => multiplyAll([-3, 2, 1, -9, 4])(-1)", multiplyAll([-3, 2, 1, -9, 4])(-1)); // === [3, -2, -1, 9, -4]