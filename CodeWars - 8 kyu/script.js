'use strict';

// BASIC: Making Six Toast.

function sixToast(num) {
    return (num === 0) ? num : Math.abs(num - 6);
}

console.log(sixToast(6)); // 0
console.log(sixToast(17)); // 11
console.log(sixToast(3)); // 3