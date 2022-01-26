'use strict';

// Get the mean of an array

function getAverage(marks){
    return Math.floor( marks.reduce((sum, el) => (sum + el), 0) / marks.length );
}

console.log(getAverage([1,2,3,4,5,])); // 3
console.log(getAverage([1,1,1,1,1,1,1,2])); // 1