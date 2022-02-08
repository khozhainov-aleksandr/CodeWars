'use strict';

// Ironman triathlon

function getTriathlonDistance(distance) {
    const ironMan = {
      swim: 3.86,
      bike: 184.11,
      run: 226.31,
    };

    const totalDistance = 3.86 + 180.25 + 42.2;
    const toFinish = Number((totalDistance - distance).toFixed(2));
  
    if (distance === 0) {
        return 'Starting Line... Good Luck!';
    } else if (distance > 0 && distance < ironMan.swim) {
        ironMan.swim = `${toFinish} to go!`;
        return {swim: ironMan.swim};
    } else if (distance >= ironMan.swim && distance < ironMan.bike) {
        ironMan.bike = `${toFinish} to go!`;
        return {bike: ironMan.bike};
    } else if (distance >= ironMan.bike && distance < ironMan.run) {
        ironMan.run = `${toFinish} to go!`;
        return {run: ironMan.run};
    } else {
        return 'You\'re done! Stop running!';
    }   
}

console.log(getTriathlonDistance(39)); // { bike: '187.31 to go!' }
console.log(getTriathlonDistance(2.05)); // { swim: '224.26 to go!' }
console.log(getTriathlonDistance(200.31)); // { run: '26 to go!' }
console.log(getTriathlonDistance(39)); // { bike: '187.31 to go!' }

console.log(getTriathlonDistance(0)); // 'Starting Line... Good Luck!'
console.log(getTriathlonDistance(226.31)); // You're done! Stop running!'