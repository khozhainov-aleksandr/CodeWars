'use strict';

// Max and min

function maxAndMin(numbersString) {
  const x = numbersString.split(' ').filter(el => el !== '').map(el => Number(el));
  const max = Math.max(...x);
  const min = Math.min(...x);

  return `${max} ${min}`;
}

console.log( maxAndMin('1   2 3 4 5') ); // '5 1'
console.log( maxAndMin('1 9 3   4 -5') ); // '9 -5'
console.log( maxAndMin('8 8') ); // '8 8'

console.log( maxAndMin('2') ); // '2 2'