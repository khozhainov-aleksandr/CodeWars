'use strict';

// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
    const x = (a < b) ? a : b;
    const z = (a > b) ? a : b;
    let sum = [];

    for(let i = x; i <= z; i++) {
        sum.push(i);
    }

    return (a === b) ? a : sum.reduce((sum, el) => (sum + el));
}

console.log( getSum(5, -3) ); // 9
console.log( getSum(0, -1) ); // -1
console.log( getSum(0, 1) ); // 1
console.log( getSum(1, 1) ); // 1
console.log( getSum(-1, 2) ); // 2