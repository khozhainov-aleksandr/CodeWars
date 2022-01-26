'use strict';

// Find the odd int

function findOdd(arr) {
    const sortArr = arr.sort((a,b) => a-b);
    let count = 0;

    for (let i = 0; i < sortArr.length; i++) {
        for (let j = 0; j < sortArr.length; j++) {
            if (sortArr[i] === sortArr[j]) { count++; }
        }
        if (count % 2 !== 0) { return sortArr[i]; }
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1