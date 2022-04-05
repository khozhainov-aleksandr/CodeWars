'use strict';

// Length of last word

function lengthOfLastWord(words) {
  return words.trim().split(' ').reverse()[0].length;
}

console.log( lengthOfLastWord(' ') ); // === 0
console.log( lengthOfLastWord('Hello ') ); // === 5
console.log( lengthOfLastWord('Welcome to Mate Academy') ); // === 7