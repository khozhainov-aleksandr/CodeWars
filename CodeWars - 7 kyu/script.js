'use strict';

// Remove female ages

function removeFemaleAges(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].gender === 'female') {
            delete people[i].age;
        }
    }
}

const people = [
    { name: 'Emma', gender: 'female', age: 19 },
    { name: 'Avram', gender: 'male', age: 41 },
];

removeFemaleAges(people);

console.log(people);