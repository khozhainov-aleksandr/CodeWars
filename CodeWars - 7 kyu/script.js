'use strict';

// Valid palindrome

function isPalindrome(str) {
  const filterStr = str
    .toLowerCase()
    .split('')
    .filter(el => (
      el !== ' ' && 
      el !== ',' &&
      el !== '.' &&
      el !== '?' &&
      el !== '!' &&
      el !== ':' &&
      el !== ';'
    ));

  return filterStr.join('') === filterStr.reverse().join('');
}

console.log( isPalindrome('madam') ); // === true
console.log( isPalindrome('Kayak') ); // === true // регистр нужно игнорировать
console.log( isPalindrome('b2b') ); // === true
console.log( isPalindrome('Was it a cat I saw?') ); // === true // пробелы и пунктуацию нужно игнорировать
console.log( isPalindrome('hello') ); // === false // 'hello' справа налево - это 'olleh', поэтому это не палиндром
console.log( isPalindrome('1noon2') ); // === false // '1noon2' справа налево - это '2noon', поэтому это не палиндром