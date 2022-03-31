'use strict';

// Upgrade robot

function upgradeRobot(robot, parts) {
  return Object.assign(robot, ...parts);
}

const kobi = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
}

const parts = [
  { wheels: 6 },
  { chipVer: 16 },
  { displays: 2 },
];

upgradeRobot(kobi, parts);

console.log( kobi.serialNo ); // === 413
console.log( kobi.wheels ); // === 6
console.log( kobi.chipVer ); // === 16
console.log( kobi.displays ); // === 2