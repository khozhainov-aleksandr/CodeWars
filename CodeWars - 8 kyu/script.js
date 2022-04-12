'use strict';

// Get people names

const people = [
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
];

function getPeopleNames(people) {
  return people.map(el => el.name);
}

console.log("🚀 ~ file:", getPeopleNames(people)) // === ['Carolus Haverbeke', Emma de Milliano', Maria de Rycke']