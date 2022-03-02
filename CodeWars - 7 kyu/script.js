'use strict';

// Sum of numbers

function getSum(a, b) {
    if (a === b) {return a;}

    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let res = 0;

    for (let i = min; i <= max; i++ ) {
        res += i;
    }

    return res;
}

console.log( getSum(1, 3) ); // 6 // 1 + 2 + 3 = 6
// console.log( getSum(2, -3) ); // -3 // -3 + -2 + -1 + 0 + 1 + 2 = -3
// console.log( getSum(5, 5) ); // 5 // Поскольку оба числа одинаковы