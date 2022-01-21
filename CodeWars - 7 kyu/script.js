'use strict';

// No Loops 1 - Small enough?

function smallEnough(a, limit) {
    return Math.max(...a) <= limit;
}

console.log( smallEnough([101, 45, 75, 105, 99, 107], 107) ); // true
console.log( smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120) ); // true
console.log( smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) ); // false