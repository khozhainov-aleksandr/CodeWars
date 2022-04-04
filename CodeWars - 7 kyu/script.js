'use strict';

// Mate royal oil

function fillTank(customer, fuelPrice, amount = Infinity) {
  const freeSpace = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  const canBuy = customer.money / fuelPrice;

  const requiredAmount = Math.min(amount, freeSpace, canBuy);
  const roundedAmount = roundFuel(requiredAmount);

  if (roundedAmount < 2) {
    return;
  }

  customer.vehicle.fuelRemains += roundedAmount;
  customer.money -= roundPrice(roundedAmount * fuelPrice);
}

function roundFuel(fuel) {
  return Math.floor(fuel * 10) / 10;
}

function roundPrice(price) {
  return Math.round(price * 100) / 100;
}

const customer = {
  money: 1000,
  vehicle: {
    maxTankCapacity: 50,
    fuelRemains: 15,
  },
};

console.log( fillTank(customer, 11.775, 10) );

// .toEqual({
//   money: 882.25,
//   vehicle: {
//     maxTankCapacity: 50,
//     fuelRemains: 25,
//   },
// });