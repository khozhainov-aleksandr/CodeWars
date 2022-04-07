'use strict';

// Sort robots

const robots = [
  {name: 'Kobs', ver: 16},
  {name: 'Lari', ver: 32},
  {name: 'Lee', ver: 1},
  {name: 'Robert', ver: 1},
  {name: 'Viber', ver: 4},
  {name: 'Colins', ver: 21},
]

function sortRobotsByVersion(robots) {
  robots.sort((a, b) => b.ver - a.ver);
}

console.log( sortRobotsByVersion(robots) );

// robots === [
//   {name: 'Lari', ver: 32},
//   {name: 'Colins', ver: 21},
//   {name: 'Kobs', ver: 16},
//   {name: 'Viber', ver: 4},
//   {name: 'Lee', ver: 1},
//   {name: 'Robert', ver: 1},
// ]