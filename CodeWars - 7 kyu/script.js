'use strict';

// Duplicate encoder

function encodeDuplicates(word) {
  const arrStr = word.toLowerCase().split('');
  const arr = [];
  const obj = {};

  arrStr.forEach(el => {
    obj[el] = (obj[el] || 0) + 1;
  });

  const objToArr = Object.entries(obj);

  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < objToArr.length; j++) {
      if (arrStr[i] === objToArr[j][0]) {
        if (objToArr[j][1] >= 2) {
          arr.push('y');
        } else {
          arr.push('x');
        }
      }
    }
  }

  return arr.join('');
}

console.log( encodeDuplicates('get') ); // === 'xxx'
console.log( encodeDuplicates('google') ); // === 'yyyyxx'
console.log( encodeDuplicates('David') ); // === 'yxxxy'
console.log( encodeDuplicates('mama') ); // === 'yyyy'