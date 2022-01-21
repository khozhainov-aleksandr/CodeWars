'use strict';

// Small enough? - Beginner

function smallEnough(arr, limit) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= limit) { return false; }
    }
    
    return true;
}

console.log( smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) ); // false
console.log( smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120) ); // true