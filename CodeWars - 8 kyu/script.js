'use strict';

// Vowel remover

function shortcut(string) {
  return string.replace(/[aeiou]/gi, '');
}

console.log(shortcut('hello')); // 'hll'
console.log(shortcut('how are you today?')); // 'hw r y tdy?'