'use strict';

// Connections limit

const connect = makePackage(3);

function makePackage(connectionsLimit) {
  let count = connectionsLimit;

  const result = () => {
    count--;

    if (count >= 0) {
      return `${count} connections left`;
    } else {
      return `You reached the connections limit!`;
    }
  }

  return result;
}

console.log("🔥 => connect()", connect());
// '2 connections left'

console.log("🔥 => connect()", connect());
// '1 connections left'

console.log("🔥 => connect()", connect());
// '0 connections left'

console.log("🔥 => connect()", connect());
// 'You reached the connections limit!'

console.log("🔥 => connect()", connect());
// 'You reached the connections limit!'