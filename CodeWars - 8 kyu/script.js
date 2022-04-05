'use strict';

// Merge arrays

function mergeArrays(arr1, arr2) {
  const res = [];

  for (let i = 0; i < 50; i++) {
    res.push(arr1[i], arr2[i]);
  }

  return res.filter(el => el !== undefined);
}

console.log( mergeArrays(['a', 'b'], [1, 2]) ); // === ['a', 1, 'b', 2]
console.log( mergeArrays(['a', 'b', 'c'], [1]) ); // === ['a', 1, 'b', 'c']
console.log( mergeArrays(['a'], [1, 2, 3]) ); // === ['a', 1, 2, 3]