'use strict';

// Shop cart

function makeOrderList(str) {
  const productNameAndQuantity = str.split(',').map(el => el.trim());
  const res = [];

  if (str === '') {
    return {};
  }

  productNameAndQuantity.forEach(element => {
    const elementToArr = element.split(' ');
    const quantityGoods = Number(elementToArr[0]);
    const productName = elementToArr.splice(1, (elementToArr.length)).join('_');

    res.push([productName, quantityGoods]);
  });

  return Object.fromEntries(res);
}

const order = '1 coca cola, 5 chicken nuggets, 20 egg';
const list = makeOrderList(order);
console.log( list );

/*
list === {
  coca_cola: 1,
  chicken_nuggets: 5,
  egg: 20,
}
*/