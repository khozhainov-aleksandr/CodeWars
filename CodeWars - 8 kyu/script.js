'use strict';

// Contain letters

function containLetters(str1, str2) {
  const str1Arr = str1.toLowerCase().split('');
  const str2Arr = str2.toLowerCase().split('');
  const res = str1Arr.filter(el => str2Arr.includes(el)).join('').length;

  if (res === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log( containLetters('rkqodlw', 'world') ); // === true
console.log( containLetters('rkqodlw', 'woorld') ); // === false
console.log( containLetters('scriptjava', 'javascript') ); // === true
console.log( containLetters('katas', 'steak') ); // === false