'use strict';

// Slice method

const numbers = [5, 6, 1, 4, 2, 5];
const result1 = numbers.slice(0);
const result2 = numbers.slice(3);
const result3 = numbers.slice(-2);
const result4 = numbers.slice(0, -2);
const result5 = numbers.slice(2, -4);

function normalizeIndex(value, max) {
  let clampedValue = value;

  if (clampedValue > max) {
    clampedValue = max;
  }

  if (clampedValue < 0) {
    clampedValue = clampedValue + max;
  }

  if (clampedValue < 0) {
    clampedValue = 0;
  }

  return clampedValue;
}

numbers.slice = function(start = 0, end = this.length) {
  const newArray = [];
  const startIndex = normalizeIndex(start, this.length);
  const endIndex = normalizeIndex(end, this.length);

  for (let i = startIndex; i < endIndex; i++) {
    newArray[i - startIndex] = this[i];
  }

  return newArray;
};

console.log( numbers ); // === [5, 6, 1, 4, 2, 5]
console.log( result1 ); // === [5, 6, 1, 4, 2, 5]
console.log( result2 ); // === [4, 2, 5]
console.log( result3 ); // === [2, 5]
console.log( result4 ); // === [5, 6, 1, 4]
console.log( result5 ); // === []