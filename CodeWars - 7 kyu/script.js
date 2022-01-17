'use strict';

// Exes and Ohs

function XO(str) {
    const arr = str.toLowerCase().split('');
    let x = arr.filter(el => el === 'x').length;
    let o = arr.filter(el => el === 'o').length;

    return (x === o);
}

console.log( XO("xxOo") ); // true
console.log( XO("ooom") ); // false