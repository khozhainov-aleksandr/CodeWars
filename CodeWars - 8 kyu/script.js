'use strict';

// Simple calculator

function calculate(operands, operation) {
  return operation(operands[0], operands[1]);
}

const sum = (a, b) => a + b;

calculate([2, 6], sum); // 8

const multiply = (a, b) => a * b;
calculate([2, 6], multiply); // 12