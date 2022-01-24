'use strict';

// You only need one - Beginner

function check(arr, x) {
    return !arr.every((el) => (el !== x));
}

console.log(check([66, 101], 66)); // true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false