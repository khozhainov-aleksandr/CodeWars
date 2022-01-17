'use strict';

// List Filtering

function filterList(list) {
    return list.filter(el => (typeof(el) === 'number'));
}

console.log( filterList([1,2,'a','b']) ); // [1,2]
console.log( filterList([1,2,'aasf','1','123',123]) ); // [1,2,123]