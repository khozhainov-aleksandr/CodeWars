'use strict';

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(string) { 
    const reg = /\!+$/gi;
    return string.replace(reg, '');
  }

console.log( remove("Hi!")); // === "Hi"
console.log( remove("Hi!!!")); // === "Hi"
console.log( remove("!Hi")); // === "!Hi"
console.log( remove("!Hi!")); // === "!Hi"
console.log( remove("Hi! Hi!")); // === "Hi! Hi"
console.log( remove("Hi")); // === "Hi"