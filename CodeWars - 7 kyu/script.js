'use strict';

// Count boxes

function countBoxes(boxes) {
    // if (boxes === '') {return {}; }

    const res = {};
    const arr = boxes.split('');
    const eachElement = arr.filter( (element, index) => arr.indexOf(element) === index );

    for (let i = 0; i < eachElement.length; i++) {
        let key = arr.filter((element) => (element === eachElement[i])).length;
        let value = eachElement[i];
        res[value] = key;
    }

    return res;
}

console.log( countBoxes('aabca') );  // { a: 3, b: 1, c: 1 }
console.log( countBoxes('aaaaca31') );  // { a: 5, c: 1, 3: 1, 1: 1 }
console.log( countBoxes('') );  // {}