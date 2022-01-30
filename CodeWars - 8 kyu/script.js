'use strict';

// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  return (name[0].toUpperCase() === 'R') ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam')); // "Adam does not play banjo"