'use strict';

// Generate chart

function generateChart(statistics) {
  const degrees = 360;
  const totalAmountRobots = Object.values(statistics).reduce((sum, el) => (sum + el), 0);
  const arrRobotsInDegrees = Object.entries(statistics)
    .map(element => [element[0], Math.round(degrees * (element[1] * 100 / totalAmountRobots) / 100)])

  return Object.fromEntries(arrRobotsInDegrees);
}

console.log( generateChart({ cleaner: 2, driver: 8 }) ); // === { cleaner: 72, driver: 288 }
console.log( generateChart({ cleaner: 2, driver: 8, washer: 14 }) ); // === { cleaner: 30, driver: 120, washer: 210 }
console.log( generateChart({ cleaner: 1 }) ); // === { cleaner: 360 }