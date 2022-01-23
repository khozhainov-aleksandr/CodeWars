'use strict';

// Is every value in the array an array?

const arrCheck = value => value.every(el => Array.isArray(el));

console.log( arrCheck([]) ); // true
console.log( arrCheck([[1],[2],[3]]) ); // true

console.log( arrCheck([[],{}]) ); // false
console.log( arrCheck(['A', 'R', 'R', 'A', 'Y']) ); // false