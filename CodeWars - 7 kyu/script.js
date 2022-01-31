'use strict';

// We are a little different

function getDifference(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
  
    return max - min;
}

console.log(getDifference([42, 45, 1, 78, 92, 10])); // 91