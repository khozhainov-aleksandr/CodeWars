'use strict';

// Sum of range

function getSumOfRange(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    
    return arr.reduce((sum, el) => (sum + el));
}

console.log(getSumOfRange(1, 10)); // 55
console.log(getSumOfRange(-5, 5)); // 0
console.log(getSumOfRange(1, 500)); // 125250