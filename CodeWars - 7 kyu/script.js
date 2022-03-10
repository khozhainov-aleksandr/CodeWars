'use strict';

// Vowels count

function countVowels(str) {
  const x = ['a', 'e', 'i', 'o', 'u'];
  let res = 0;

  x.forEach(element => {
    res += str.split('').filter(el => element === el).length;
  });

  return res;
}

console.log( countVowels('hello world') ); // === 3
console.log( countVowels('ooooo') ); // === 5
console.log( countVowels('qwrtp') ); // === 0
console.log( countVowels('gym') ); // === 0 // 'y' не считается гласной