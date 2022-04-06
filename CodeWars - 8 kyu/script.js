'use strict';

// Simple AI

function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

const getClientStatus = () => 'vip';
const offerLuxuriousRoom = () => 'Luxury room';
const offerStandardRoom = () => 'Standard room';

console.log( offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) ); // === 'Luxury room';