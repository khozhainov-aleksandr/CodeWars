'use strict';

// Save and rescue

const robot = {
  name: 'Sundar',
};

const workPlaces = [
  {
    name: 'mate academy',
    staff: ['Roma', 'Misha', 'Yura'],
  },
  {
    name: 'Google',
    staff: ['Larry', 'Sergey', 'Sundar'],
  },
];

const searchRobot = (robot, workPlaces) => {
  const robotName = robot.name;
  let res;

  workPlaces.forEach(element => {
    const location = element.name;
    const robotsName = element.staff;

    robotsName.forEach(el => {
      if (el === robotName) {
        res = location;
      }
    });
  });

  return res;
};

console.log( searchRobot(robot, workPlaces) ); // возвращает 'Google';