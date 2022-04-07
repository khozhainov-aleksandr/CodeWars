'use strict';

// Sort names

const people = [
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
  { id: 204, firstName: 'Lieven', lastName: 'Causmaecker' },
  { id: 205, firstName: 'Maria', lastName: 'Sturm' },
];


function getEmployeesList(people) {
  const res = [];

  people.forEach(element => {
    res.push(`${element.firstName} ${element.lastName}`);
  });

  return res.sort();
}


console.log( getEmployeesList(people) ); // === [
//   'Anna Bernardus',
//   'Clara Aernoudts',
//   'Jan Rycke',
//   'Lee Haverbeke',
//   'Lieven Causmaecker',
//   'Maria Sturm'
// ];