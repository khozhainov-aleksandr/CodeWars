'use strict';

// Get robot schema

function getRobotSchema(robot) {
    const newScheme = {};
  
    for (const key in robot) {
      const value = key;
  
      newScheme[value] = typeof robot[key];
    }
  
    return newScheme;
}

const robot = {
    version: 16,
    name: 'Cleaner 3000',
    released: true,
    creator: { name: 'Vlad' },
};

console.log(robot);
console.log(getRobotSchema(robot));