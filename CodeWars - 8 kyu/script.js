'use strict';

// Array of digits

function toArrayOfDigits(n) {
  return n.toString().split('').reverse().map(el => Number(el));
}

console.log("🔥 => toArrayOfDigits(46156)", toArrayOfDigits(46156));