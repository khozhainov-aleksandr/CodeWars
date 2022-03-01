'use strict';

// Get middle character

function getMiddleChar(word) {
  if (word.length % 2 === 0) {
    return word.slice((word.length / 2 - 1), (word.length / 2 + 1));
  } else {
    return word.slice((Math.floor(word.length / 2)), (Math.floor(word.length / 2) + 1));
  }
}

console.log( getMiddleChar('test') ); // = 'es'
console.log( getMiddleChar('testing') ); // = 't'
console.log( getMiddleChar('middle') ); // = 'dd'
console.log( getMiddleChar('A') ); // = 'A'