'use strict';

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    let x = 0;
    let z = 0;

    if (input === null || input.length < 1) {return [];}

    for (let key in input) {
        if (input[key] > 0) {
            x += 1;
        } else {
            z += input[key];
        }
    }
    
    return [x, z];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); // [8, -50]
console.log(countPositivesSumNegatives([])); // []