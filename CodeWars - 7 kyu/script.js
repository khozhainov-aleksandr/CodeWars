'use strict';

// Unique names

function getUniqNames(names) {
    return names.filter( (element, index) => names.indexOf(element) === index );
}

console.log(getUniqNames(['Eileen', 'Peter', 'Jared', 'Robert', 'Robert', 'Robert', 'David',])); // ['Eileen', 'Peter', 'Jared', 'Robert', 'David']