'use strict';

// Stop gninnipS My sdroW!

function spinWords(string){
    return string.split(' ').map(el => (el.length >= 5) ? el.split('').reverse().join('') : el).join(' ');
}

console.log(spinWords("Welcome")); // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one"