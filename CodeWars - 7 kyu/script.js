'use strict';

// Get product ID

function getProductId(url) {
  const prod = Number(url.split('-p-')[1].split('-')[0]);

  if (!isNaN(prod)) {
    return String(prod);
  } else {
    return url.split('-p-')[2].split('-')[0];
  }
}

console.log( getProductId('exampleshop.com/fancy-coffee-cup-p-90764-12052019.html') ); // productID is 90764
console.log( getProductId('exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html') ); // productID is 147
console.log( getProductId('exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html') ); // productID is 942312798