'use strict';

// Array reverse

function arrayReverse(words) {
  const str = words.join('').split('').reverse().join('');
  const res = [];
  let length = 0;
  let position = 0;

  words.forEach((element, i) => {
    length += element.length;
    res.push(str.slice(position, length));
    position += element.length;
  });

  return res;
}

console.log( arrayReverse(['Hello']) ); // === ['olleH']
console.log( arrayReverse(['Mate', 'Academy']) ); // === ['ymed', 'acAetaM']
console.log( arrayReverse(['I', 'am', 'a', 'student!']) ); // === ['!', 'tn', 'e', 'dutsamaI']