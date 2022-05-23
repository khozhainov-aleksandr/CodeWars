'use strict';

function matchArrays(firstArr, secondArr) {
  const arr = firstArr.filter(i => secondArr.includes(i))
  return arr.length;
}

console.log( matchArrays([2, 4, 8], [1, 2, 5]) ); // === 1 
console.log( matchArrays(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']) ); // === 4
console.log( matchArrays(['x', 'y', 'z'], [8, 9, 10]) ); // === 0 