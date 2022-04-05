'use strict';

// Who's Online

// const test = [{
//   username: 'Alice',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }];

const friends = [{
  username: 'Lucy',
  status: 'offline',
  lastActivity: 100,
}, {
  username: 'Bob',
  status: 'offline',
  lastActivity: 99,
},
{
  username: 'David',
  status: 'offline',
  lastActivity: 256,
}];


// const friends = [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
//   }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
//   }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
//   }]

function whoIsOnline(friends) {
  const result = {};

  if (friends.length === 0) {
    return result;
  }

  for (let i = 0; i < friends.length; i++) {
    let status = friends[i].status;

    if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
      status = 'away';
    }

    const value = result[status];

    if (value) {
      result[status].push(friends[i].username);
    } else {
      result[status] = [friends[i].username];
    }
  }

  return result;
}

// console.log( whoIsOnline(test) );
console.log( whoIsOnline(friends) );