'use strict';

// Unique names

function getUniqNames(names) {
    return names.filter((el, i) => {
        return names.indexOf(el) === i;
    });
}

console.log(getUniqNames([
    'Eileen',
    'Peter',
    'Jared',
    'Robert',
    'Robert',
    'Robert',
    'David',
  ])); // ['Eileen', 'Peter', 'Jared', 'Robert', 'David']