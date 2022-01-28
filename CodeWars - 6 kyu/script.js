'use strict';

// Array.diff

function arrayDiff(a, b) {
    if (a.toString() === '') { return []; }
    if (b.toString() === '') { return a; }

    const long = (a.length > b.length) ? a : b;
    const short = (a.length < b.length) ? a : b;
    let res = [];

    long.forEach(element => (!short.includes(element)) ? res.push(element) : element);

    return res;
}

console.log(arrayDiff([], [4,5])); // []
console.log(arrayDiff([1,2,3], [1,2])); // [3]
console.log(arrayDiff([3,4], [3])); // [4]
console.log(arrayDiff([1,2,2], [2])); // [1]