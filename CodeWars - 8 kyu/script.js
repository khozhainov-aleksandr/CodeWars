'use strict';

// Register robot

function registerRobot(robot, warehouse) {
  warehouse.aiStaff.push(robot.id);
  robot.currentWorkPlace = warehouse;
}

registerRobot();