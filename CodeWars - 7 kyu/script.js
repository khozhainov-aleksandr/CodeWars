'use strict';

// Get the Middle Character

// function getMiddle(str) {
//     let arr = str.split('');

//     if (arr.length % 2) {
//         return arr[Math.trunc(arr.length / 2)];
//     } else {
//         return `${arr[(arr.length / 2) - 1]}${arr[arr.length / 2]}`;
//     }
// }

function getMiddle(str) {
    return (str.split('').length % 2) ? str.split('')[Math.trunc(str.split('').length / 2)] : `${str.split('')[(str.split('').length / 2) - 1]}${str.split('')[str.split('').length / 2]}`;
}

console.log( getMiddle("testing") ); // "t"
console.log( getMiddle("middle") ); // "dd"