'use strict';

// Register robot

function makeRobotsPair(robot1, robot2) {
  if (typeof robot2 === 'undefined') {
    robot1.partner = null;
    
  } else {
    robot1.partner = robot2;
    robot2.partner = robot1;
  }

  return robot1.partner;
}



const charlie = { name: 'Charlie' };
const joy = { name: 'Joy' };
const lordy = { name: 'Lordy' };

makeRobotsPair(joy, lordy);

console.log(
  joy.partner, // true 
  lordy.partner, // true
);

makeRobotsPair(charlie);

console.log(charlie.partner); // null