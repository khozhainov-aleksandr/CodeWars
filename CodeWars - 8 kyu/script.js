'use strict';

// Bad robot! Bad!

function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = 1; i <= currentVersion; i++) {
    if (checkVersion(i)) {
      return i;
    }
  }
}

function checkVersion(version) {
  return version > 133;
}

console.log( getFirstBadVersion(checkVersion, 145) ); // === 134


const checkVersion = v => v >= 30;
console.log( getFirstBadVersion(checkVersion, 55) ); // === 30