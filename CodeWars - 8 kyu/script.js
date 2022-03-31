'use strict';

// Copy robot

function createRobotCopy(robot) {
  const newRobot = {...robot};
  newRobot.serial += 1;

  return newRobot;
}

const charlie = {
  serial: 100,
  chipVer: 12,
  wheels: 6,
}

const marlie = createRobotCopy(charlie);

console.log( charlie );
console.log( marlie );

console.log( '----------------------------' );

console.log( charlie.serial ); // === 100
console.log( marlie.serial ); // === 101