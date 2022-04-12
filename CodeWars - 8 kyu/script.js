'use strict';

// Get father

// const people = [
//   { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
//   { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
//   { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
//   { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837, father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
// ];

// function getFather(people, person) {
//   if (people.toString() === '') {
//     return null;
//   }

//   if (people.some(el => person.father === el.name && el.sex === 'm')) {
//     return people[people.length - 1];
//   } else {
//     return null;
//   }
// }

// const person = people[0];

// console.log("🚀 ~ file:", getFather(people, person)) // === people[3];

// ------------------------------------------------------------------------------------------------------------------------------ //

// Get people lived at least 65 years

const people = [
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837, father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
];

function getPeopleLivedMin65Years(people) {
  return people.filter(el => (el.died - el.born) < 65);
}

console.log("🚀 ~", getPeopleLivedMin65Years(people))
// === [people[0], people[1]];