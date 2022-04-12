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

// Create lived min filter

// const carolus = { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
// const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
// const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
// const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

// const people = [carolus, emma, maria, carel];

// function createLivedMinFilter(age) {
//   const x = age;
//   return age => ((age.died - age.born) > x);
// }

// console.log("🚀 ~", people.filter(createLivedMinFilter(60)))
// // [carolus, emma]

// ------------------------------------------------------------------------------------------------------------------------------ //

// Get people with life durations

const people = [
  { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
  { name: 'Emma de Milliano', born: 1876, died: 1956 },
  { name: 'Maria de Rycke', born: 1683, died: 1724 },
  { name: 'Carel Haverbeke', born: 1796, died: 1837 },
];

function getPeopleWithLifeDurations(people) {
  const copy = [...people];

  return copy.map(el => {
    const year = el.died - el.born;
    const addToObject = {
      lifeDuration: year,
    };

    return Object.assign(el, addToObject);
  });
}

const newPeople = getPeopleWithLifeDurations(people);

// console.log( getPeopleWithLifeDurations(people) ); // === [
//   { name: 'Carolus Haverbeke', born: 1832, died: 1905, lifeDuration: 73 },
//   { name: 'Emma de Milliano', born: 1876, died: 1956, lifeDuration: 80 },
//   { name: 'Maria de Rycke', born: 1683, died: 1724, lifeDuration: 41 },
//   { name: 'Carel Haverbeke', born: 1796, died: 1837, lifeDuration: 41 },
// ];

console.log( people );
console.log( newPeople );