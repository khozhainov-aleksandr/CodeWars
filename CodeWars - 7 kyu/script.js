'use strict';

// Counting duplicates

function countDuplicates(str) {
  const arrStr = str.toLowerCase().split('');
  const res = {};

  arrStr.forEach(element => {
    res[element] = (res[element] || 0) + 1;
  });

  return Object.values(res).filter(el => el > 1).length;
}

console.log(countDuplicates('abcde')); // 0 // ни один символ не повторяется более одного раза
console.log(countDuplicates('aabbcde')); // 2 // 'a' и 'b' встречаются более одного раза
console.log(countDuplicates('aA11')); // 2 // 'a' и '1' встречаются более одного раза