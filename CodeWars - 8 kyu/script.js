'use strict';

// Get people life durations

const people = [
  { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905, father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956, father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724, father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
];

function getPeopleLifeDurations(people) {
  return people.map(el => (el.died - el.born));
}

console.log("🚀 ~ file:", getPeopleLifeDurations(people)) // === [73, 80, 41];