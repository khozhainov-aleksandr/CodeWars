'use strict';
// Get digits from number
function getDigits(num) {
    const str = num.toString();
    const arr = str.split('').map(el => Number(el)).sort((a, b) => a - b);
    return arr;
}
console.log("🔥 => getDigits(5)", getDigits(5)); // === [5]
console.log("🔥 => getDigits(721)", getDigits(721)); // === [1, 2, 7]
console.log("🔥 => getDigits(4044)", getDigits(4044)); // === [0, 4, 4, 4]
