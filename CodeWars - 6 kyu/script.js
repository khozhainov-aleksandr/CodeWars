'use strict';

// Reverse words

function reverseWords(str) {
  const array = str.split(' ');
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i].split('').reverse().join('');
    result.push(element);
  }

  return result.join(' ');
}

console.log( reverseWords('This is an example!') ); // === 'sihT si na !elpmaxe'
console.log( reverseWords('double  spaces') ); // === 'elbuod  secaps'