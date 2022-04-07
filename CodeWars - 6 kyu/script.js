'use strict';

// Find a person

const people = [
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
];

function getPersonById(id, people) {
  const find = people.find((element) => (element.id === id));

  if (find === undefined) {
    return null;
  } else {
    return find;
  }
}

console.log( getPersonById(201, people) ); // === { id: 201, firstName: 'Anna', lastName: 'Bernardus' }
console.log( getPersonById(404, people) ); // === null