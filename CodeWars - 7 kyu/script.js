'use strict';

// Are robots the same?

const compareRobots = (robot1, robot2) => {
  delete robot1.serialNo;
  delete robot2.serialNo;

  const x = Object.keys(robot1);
  const y = Object.keys(robot2);

  if (x.length !== y.length) {
    return false;
  };

  for (const i of x) {
    if (robot1[i] !== robot2[i]) {
      return false;
    }
  }

  return true;
};

const charlie = { serialNo: 1, chipVer: 12 };

const lordy = { serialNo: 2, chipVer: 12 };
console.log( compareRobots(charlie, lordy) ); // true

const paul = { serialNo: 3, chipVer: 15 };
console.log( compareRobots(paul, charlie) ); // false

const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
console.log( compareRobots(mike, charlie) ); // false

const max = { serialNo: 5, engineVer: 12 };
console.log( compareRobots(max, charlie) ); // false

const steve = { serialNo: 6 };
console.log( compareRobots(steve, charlie) ); // false