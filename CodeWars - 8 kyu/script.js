'use strict';

// Calculate cost

function calculateCost(bucket, products) {
  const objPrice = {};
  let quantity = 0;
  let price = 0;
  let totalPrice = 0;

  for (const key in products) {
    Object.assign(objPrice, products[key]);
  }

  for (const keyBucket in bucket) {
    quantity = bucket[keyBucket];

    for (const keyObjPrice in objPrice) {

      if (keyObjPrice === keyBucket) {
        price = objPrice[keyObjPrice];
      }
    }

    totalPrice += quantity * price;
  }

  return totalPrice;
}

const bucket = {
  display: 20,
  wheel: 100,
  cpu: 40,
}

const products = {
  amazobot: {
    wheel: 12.5,
  },
  robozetka: {
    display: 56.2,
    cpu: 150,
  },
}

console.log( calculateCost(bucket, products) ); // === 8374