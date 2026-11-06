const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(array) {
	return array.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((sum, currentValue) => {
    return sum * currentValue;
  }, 1);
};

const power = function(value, power) {
  return Math.pow(value, power);
};

const factorial = function(value) {
  let total = 1;

	for (let i = 1; i < value + 1; i++) {
    total = total * i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
