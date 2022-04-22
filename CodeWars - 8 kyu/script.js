'use strict';

// Array compression

function compressArray(chars) {
  const obj = {};

  chars.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  return Object
    .entries(obj)
    .flat(2)
    .filter(el => el !== 1)
    .length;
}

console.log("🔥 => compressArray(['a', 'a', 'b', 'b', 'c', 'c', 'c'])", compressArray(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
// === 6 // сжатый массив - это ['a', '2', 'b', '2', 'c', '3']

console.log("🔥 => compressArray(['a'])", compressArray(['a']));
// === 1 // сжатый массив - это ['a']

console.log("🔥 => compressArray(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'a', 'a'])", compressArray(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'a', 'a']));
// === 5 // сжатый массив - это ['a', 'b', '8', 'a', '2']
