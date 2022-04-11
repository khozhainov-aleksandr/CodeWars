'use strict';

const group = [
  { name: 'A', marks: [2, 3, 5, 4] },
  { name: 'B', marks: [2, 3, 5, 4] },
  { name: 'C', marks: [5, 5, 5, 5] },
  { name: 'D', marks: [2, 3, 5, 4] },
  { name: 'E', marks: [2, 3, 5, 4] },
];

function hasExcellentStudent(studetns, goodMarks) {
  return studetns
    .some(element => (element.marks
        .reduce((sum, el) => sum + el) / element.marks.length) === goodMarks);
}

console.log( hasExcellentStudent(group, 5) );