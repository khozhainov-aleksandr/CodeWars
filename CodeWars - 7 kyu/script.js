'use strict';

// L1: Set Alarm

function setAlarm(employed, vacation){
    return (employed === true && vacation === false);
}

console.log(setAlarm(false,true)); // false
console.log(setAlarm(true, false)); // true
console.log(setAlarm(true, true)); // false