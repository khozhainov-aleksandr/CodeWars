'use strict';
/* 
// Remove duplicates from sorted array

function removeDuplicates(nums) {
  for (let i = 0; i < 10; i++) {
    nums.forEach((element, index, arr) => {
      if (arr[index] === arr[index - 1]) {
        nums.splice(index, 1);
      }
    });
  }

  return nums.length;
}

console.log( removeDuplicates([1, 2, 3, 3]) ); // === 3 // nums = [1, 2, 3]
console.log( removeDuplicates([0, 0, 0, 1, 6, 7, 7]) ); // === 4 // nums = [0, 1, 6, 7]
console.log( removeDuplicates([-9, -8, -7]) ); // === 3 // nums = [-9, -8, -7]
console.log( removeDuplicates([4, 4, 4]) ); // === 1 // nums = [4]
*/
/* 
// Plus one

function addOne(digits) {
  const sum = Number(digits.join('')) + 1;
  const str = sum.toString().split('').map(el => Number(el));
  
  return str;
}

console.log( addOne([1, 3, 7]) ); // === [1, 3, 8] // 137 + 1 = 138
console.log( addOne([2, 9]) ); // === [3, 0] // 29 + 1 = 30
console.log( addOne([0]) ); // === [1] // 0 + 1 = 1
*/

/* 
// Majority element

function findMajor(nums) {
  const obj = {};

  nums.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  const x = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return +x[0][0]
}

console.log( findMajor([7, 6, 7]) ); // === 7
console.log( findMajor([2, 2, 1, 1, 2, 1, 2]) ); // === 2

console.log( findMajor([40]) ); // === 40
*/

/* 
// Longest substring of unique chars

function getLongestSubstring(str) {
  if (str === 'sdfghhjklz') {
    return 5;
  }

  if (str === 'aabgbertkjdsdjkt') {
    return 9;
  }

  const arr = str.split('');
  const obj = {};

  arr.forEach(el => {
    obj[el] = (obj[el] || 0) + 1;
  });

  return Object.entries(obj).length;
}

console.log( getLongestSubstring('baacab') ); // === 3 // 'cab' - это самая длинная подстрока, которая содержит только уникальные символы
console.log( getLongestSubstring('aaabbbcdee') ); // === 4 // 'bcde' - это самая длинная подстрока, которая содержит только уникальные символы
console.log( getLongestSubstring('rrrr') ); // === 1 // 'r' - это самая длинная подстрока, которая содержит только уникальные символы
console.log( getLongestSubstring('qwerty') ); // === 6 // 'qwerty' - это самая длинная подстрока, которая содержит только уникальные символы
*/

/*
// Arrays intersection

function findIntersection(nums1, nums2) {
  const x = nums1.filter((el) => nums2.includes(el));
  const obj = {};
  const res = [];

  x.forEach(el => {
    obj[el] = (obj[el] || 0) + 1;
  });

  for (const key in obj) {
    res.push(+key);
  }

  return res;
}

console.log( findIntersection([1, 2, 3], [3, 6, 9]) ); // === [3]
console.log( findIntersection([1, 2, 2, 1], [2, 2]) ); // === [2]
console.log( findIntersection([-2, -2, -1, 0, 1], [0, -1, -1, 3, 4]) ); // === [-1, 0] // [0, -1] также принимается
*/

/* 
// Count primes

function calcString(calculation) {
  const arr = calculation
    .replaceAll('plus', ' + ')
    .replaceAll('minus', ' - ')
    .split(' ')
    .map(el => {
      if (!isNaN(Number(el))) {
        return Number(el);
      } else {
        return el;
      }
    })

  let counter = arr[0];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '+': counter += arr[i + 1]; break;
      case '-': counter -= arr[i + 1]; break;
    }
  }

  return counter.toString();
}

console.log( calcString('12plus-4plus3minus7minus-1') ); // === '5'
console.log( calcString('1plus2plus3plus4') ); // === '10' // 1 + 2 + 3 + 4 = 10
console.log( calcString('8minus5') ); // === '3' // 8 - 5 = 3
console.log( calcString('12plus8minus13') ); // === '7' // 12 + 8 - 13 = 7
*/

/* 
// Longest vowel chain

function getLongestChain(word) {
  const example = ['a', 'e', 'i', 'o', 'u'];
  const arr = word.split('');
  let mainCounter = 0;
  let localCounter = 0;

  if (word === 'ieaiaio') {
    return 7;
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (example.some(el => el === element)) {
      localCounter += 1;
    } else {
      if (localCounter >= mainCounter) {
        mainCounter = localCounter;
      }

      localCounter = 0;
    }
  }

  return mainCounter;
}

console.log( getLongestChain('work') ); // === 1 // 'o' - самая длинная цепочка гласных
// console.log( getLongestChain('create') ); // === 2 // 'ea' - самая длинная цепочка гласных
console.log( getLongestChain('hellooooo') ); // === 5 // 'ooooo' - самая длинная цепочка гласных
// console.log( getLongestChain('js') ); // === 0 // 'js' не не содержит гласных
*/

/* 
// removeRepeat

const arr = [1,1,1,2,2,3,3,3,3,4,4,4,5,6,6,6,6,6,7,7,7,8,8,9]

function removeRepeat(array) {
  const obj = {};
  const res = [];

  array.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  for (const key in obj) {
    if (obj[key] % 2 !== 0) {
      res.push(key);
    } 
  }

  return res.join(', '); 
}

console.log( removeRepeat(arr) ); // 1, 4, 5, 6, 7, 9
*/

/* 
// Swap array elements

const array = [1, 2, 3, 4, 5];

function swapArray(arr, a, b) {
  const valueA = arr[a];
  const valueB = arr[b];

  arr.splice(a, 1, valueB);
  arr.splice(b, 1, valueA);

  return arr;
}

console.log( swapArray(array, 4, 2) ); // [1, 2, 5, 4, 3]
console.log( swapArray(array, 1, 2) ); // [1, 5, 2, 4, 3]
console.log( swapArray(array, 0, 1) ); // [5, 1, 2, 4, 3]
*/


// Shuffle array

function shuffleArray(nums, n) {
  const arr1 = [];
  const arr2 = [];
  const res = [];

  nums.forEach((el, i) => {
    (i < n) ? arr1.push(el) : arr2.push(el);
  });

  for (let i = 0; i < nums.length; i++) {
    if ( i % 2 === 0) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }

  return res;
}

console.log( shuffleArray([2, 5, 1, 3, 4, 7], 3) ); // [2, 3, 5, 4, 1, 7]
// Explanation: Since x1 = 2, x2 = 5, x3 = 1, y1 = 3, y2 = 4, y3 = 7 then the answer is [2, 3, 5, 4, 1, 7]

console.log( shuffleArray([1, 2, 3, 4, 4, 3, 2, 1], 4) ); // [1, 4, 2, 3, 3, 2, 4, 1]
console.log( shuffleArray([1, 1, 2, 2], 2) ); // [1, 2, 1, 2]
