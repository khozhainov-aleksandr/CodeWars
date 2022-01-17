'use strict';

// Isograms

function isIsogram(str){
    const strToArr = str.toLowerCase().split('');
    let arr = [];
    let total = '';

    strToArr.forEach(el => {
        arr.push(el);

        if ( (arr.filter((item) => (item === el)).length) >= 2 ) {
            total = false;
        }
    });

    return total === '';
}

console.log( isIsogram("Dermatoglyphics") ); // true
console.log( isIsogram("moOse") ); // false