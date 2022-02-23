'use strict';

// Calculate years

function calculateYears(principal, interest, tax, desired) {
  const percentFromBank = principal * interest;
  const clearTaxBank = principal * interest * tax;

  let totalSum = principal;
  let years = 0;
  
  for (totalSum; totalSum < desired; totalSum++) {
    totalSum = totalSum  + (percentFromBank - clearTaxBank);
    years++;
  }

  return years;
}

console.log( calculateYears(1000, 0.05, 0.18, 1100) ); // 3
console.log( calculateYears(1000, 0.05, 0.18, 1000) ); // 0
console.log( calculateYears(1000, 0.01625, 0.18, 1200) ); // 14