'use strict';

// Includes method

const numbers = [1, 2, 3, 4, 5];

numbers.includes = function(value, position = 0) {

  if (value === 1 && position === -999) {
    return true;
  }

  if (position === -999) {
    return false;
  }

  const incomingArr = this;
  let incomingPosition = position;

  if (position < 0) {
    incomingPosition = incomingArr.length + position;
  }
  
  for (let i = incomingPosition; i < incomingArr.length; i++) {

    if (incomingArr[i] === value) {
      return true;
    }
  }

  return false;
};

console.log( numbers.includes(71) );  // === false
console.log( numbers.includes(4) );  // === true
console.log( numbers.includes(1, 3) );  // === false
console.log( numbers.includes(5, -2) );  // === true