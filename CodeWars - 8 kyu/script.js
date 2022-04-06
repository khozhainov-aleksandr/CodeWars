'use strict';

// Face control

// function processArray(items, callback) {
//   const arr = [];

//   for (let i = 0; i < items.length; i++) {
//     arr.push(callback(items[i]));
//   }

//   const res = items;

//   res.length = 0;
//   res.push(...arr);

//   if (res.toString() !== '') {
//     return res;
//   } else {
//     return undefined;
//   }
// }

function processArray(items, callback) {
  for (let i = 0; i < items.length; i++) {
    items[i] = callback(items[i]);
  }
}

const queue = [
  {type: 'robot'},
  {type: 'robot'},
  {type: 'robot'},
  {type: 'dog'},
  {type: 'robot'},
];

const isRobot = (robot) => {
  if (robot.type === 'robot') {
    return true;
  }

  return false;
}

processArray(queue, isRobot);

// queue === [true, true, true, false, true]
console.log( queue );