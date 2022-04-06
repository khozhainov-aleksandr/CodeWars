'use strict';

// Filter data

const people = [
  { firstName: 'Lee', lastName: 'Haverbeke' },
  { firstName: 'Clara', lastName: 'Aernoudts' },
  { firstName: 'Jan', lastName: 'Rycke' },
  { firstName: 'Anna', lastName: 'Bernardus' },
];

function filterPeople(people) {
  return people.filter(el => el.firstName.length <= 4 && el.lastName.length > 8);
}

const requiredPeople = filterPeople(people);

console.log( requiredPeople );

 // requiredPeople === [
 //   { firstName: 'Lee', lastName: 'Haverbeke' },
 //   { firstName: 'Anna', lastName: 'Bernardus' },
 // ];