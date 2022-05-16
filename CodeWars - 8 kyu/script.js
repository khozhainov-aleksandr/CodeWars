'use strict';

// Swap array elements

// const array = [1, 2, 3, 4, 5];

// function swapArray(array, i, j) {
//   const oldNum = array[j];

//   array[i] = oldNum;
//   array[j] = 5;

//   return array;
// }

// console.log( swapArray(array, 4, 2) ); // [1, 2, 5, 4, 3]
// console.log( swapArray(array, 1, 2) ); // [1, 5, 2, 4, 3]
// console.log( swapArray(array, 0, 1) ); // [5, 1, 2, 4, 3]

// --------------------------------------------------------------------------------------------------------------------------- //

function toJadenCase(quote) {
  return quote
    .split(' ')
    .filter(el => el !== '')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
}

console.log( toJadenCase('i watch twilight every night') ); // === 'I Watch Twilight Every Night'
console.log( toJadenCase('Trees are never Sad') ); // === 'Trees Are Never Sad'
console.log( toJadenCase('  no   more words') ); // === 'No More Words'
