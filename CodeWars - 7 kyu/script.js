'use strict';

// Are in love

function areInLove(flower1, flower2) {
  return ((flower1 % 2) === 0) !== ((flower2 % 2) === 0);
}

console.log( areInLove(0, 0) );
console.log( areInLove(1, 4) );
console.log( areInLove(2, 2) );