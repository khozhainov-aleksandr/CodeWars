'use strict';
// Get max number
function getMaxNumber(num) {
    const arr = num.toString().split('');
    if (arr[0] === '-') {
        return Number(arr
            .filter((el) => el !== '-')
            .map((el) => Number(el))
            .sort((a, b) => a - b)
            .join('')) * -1;
    }
    else {
        return Number(arr
            .map((el) => Number(el))
            .sort((a, b) => b - a)
            .join(''));
    }
}
console.log("🔥 => getMaxNumber(123)", getMaxNumber(123)); // === 321
console.log("🔥 => getMaxNumber(1)", getMaxNumber(1)); // === 1
console.log("🔥 => getMaxNumber(1265)", getMaxNumber(1265)); // === 6521
console.log("🔥 => getMaxNumber(-526)", getMaxNumber(-526)); // === -256
