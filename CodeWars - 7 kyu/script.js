'use strict';

// Count letters in string

function countLettersInString(str) {
  const res = {};

  str.split('').forEach(element => {
    res[element] = (res[element] || 0) + 1;
  });

  return res;
}

console.log( countLettersInString('arithmetics') ); 
// => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}