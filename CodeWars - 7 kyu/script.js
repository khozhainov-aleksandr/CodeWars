'use strict';

// Get outdated

function getOutdated(robots, newVersion) {
    const res = [];

    for (let i = 0; i < robots.length; i++) {
      if (robots[i].coreVersion < newVersion) {
        res.push(i);
      }
    }

    return res;
}

const robots = [
    { coreVersion: 9 },
    { coreVersion: 13 },
    { coreVersion: 16 },
    { coreVersion: 9 },
    { coreVersion: 14 },
];
  
  console.log( getOutdated(robots, 10) );  // [0, 3]
  console.log( getOutdated(robots, 14) );  // [0, 1, 3]
  console.log( getOutdated(robots, 8) );  // []
  console.log( getOutdated(robots, 18) );  // [0, 1, 2, 3, 4]