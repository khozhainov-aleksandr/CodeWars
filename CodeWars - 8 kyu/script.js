'use strict';

// Pirates!! Are the Cannons ready!??

function cannonsReady(gunners) {
  let res = [];

  for(let key in gunners) {
    res.push(gunners[key]);
  }

  return res.every(el => el === 'aye') ? 'Fire!' : 'Shiver me timbers!';
}

console.log(cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}));
console.log(cannonsReady({'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}));