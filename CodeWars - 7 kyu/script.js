'use strict';

// Maskify string

function maskifyStr(str) {
  const rep = str.length - 4;
  const lastNum = str.split('').reverse().slice(0, 4).reverse().join('');
  let sharp = '';

  for (let i = 0; i < rep; i++) {
    sharp += '#';
  }

  if (str.length > 4) {
    return sharp + lastNum;
  } else {
    return str;
  }
}

console.log( maskifyStr('') ); // === ''
console.log( maskifyStr('1') ); // === '1'
console.log( maskifyStr('1111') ); // === '1111'
console.log( maskifyStr('Skippy1234') ); // === '######1234'