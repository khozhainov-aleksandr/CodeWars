'use strict';

// Analytic data

const xxx = [
  ['Mike', 'Anderson'],
  ['Lori IV', 'Pirs'],
];

const mapDatabase = (people) => {
  const res = [];

  people.forEach(element => {
    const obj = {
      firstName: element[0],
      lastName: element[1],
    };

    res.push(obj);
  });

  return res;
};

console.log( mapDatabase(xxx) );

output: [
  { firstName: 'Mike', lastName: 'Anderson' },
  { firstName: 'Lori IV', lastName: 'Pirs' }
]