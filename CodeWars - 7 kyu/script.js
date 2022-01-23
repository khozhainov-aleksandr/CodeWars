'use strict';

// No Loops 3 - Copy Within

function copy(array, start, stop, place) {
    const newCopyArray = array.slice(start, stop);
    array.splice(place, newCopyArray.length, ...newCopyArray);

    return array;
}

console.log( copy([1, 2, 3, 4, 5], 0, 2, -2) ); // [1, 2, 3, 1, 2]
console.log( copy([1, 2, 3, 4, 5], 3, 4, 0) ); // [4, 2, 3, 4, 5]
console.log( copy(["Banana", "Orange", "Apple", "Mango"], 0, 2, 2) ); // ["Banana", "Orange", "Banana", "Orange"]