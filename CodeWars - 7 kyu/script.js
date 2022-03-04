'use strict';

// Detect pangram

function isPangram(str) {
  const alphabet = 'AEIOUYBCDFGHJKLMNPQRSTVWXZ'.split('').sort();
  const arrStr = str.replace(/[^a-z]/gi, '').toUpperCase().split('').sort();
  const filterDuplicateStr = arrStr
    .filter((element, index) => arrStr.indexOf(element) === index);
  const x = alphabet
    .filter((el, i) => filterDuplicateStr.indexOf(el) !== i).length;

  return x === 0;
}

console.log( isPangram('abcdefghijklmnopqrstuvwxyz') ); // true
console.log( isPangram('Sphinx of black quartz, judge my vow.') ); // true
console.log( isPangram('AbCdEfGhIjKlMzxWvUtSrQpOn') ); // false // 'y' is missing
console.log( isPangram('Detect Pangram') ); // false 