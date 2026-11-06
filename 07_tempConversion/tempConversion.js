const convertToCelsius = function(degree) {
  let theDegree = degree;

  theDegree = theDegree - 32;

  theDegree = theDegree * 5/9;

  theDegree = parseFloat(theDegree.toFixed(1));

  return theDegree;
};

const convertToFahrenheit = function(degree) {
  let theDegree = degree;

  theDegree = theDegree * 9/5;

  theDegree = theDegree + 32;

  theDegree = parseFloat(theDegree.toFixed(1));

  return theDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
