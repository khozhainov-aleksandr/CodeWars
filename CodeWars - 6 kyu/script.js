'use strict';

// Remove string

function removeStrings(arr) {
  return arr.filter(el => typeof el !== 'string');
}

console.log( removeStrings([1, 2, 'a', 'b']) ); // === [1, 2]
console.log( removeStrings(['', 0, 10, '100']) ); // === [0, 10]