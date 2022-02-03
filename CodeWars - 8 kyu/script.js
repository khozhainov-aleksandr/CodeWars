'use strict';

// ASCII Total

function uniTotal(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt();
  }
  return sum;
}

console.log(uniTotal("e")); // 101
console.log(uniTotal("aaa")); // 291
console.log(uniTotal("Mary Had A Little Lamb")); // 1873