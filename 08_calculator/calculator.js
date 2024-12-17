const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let factorial = 1;
	for(let i=1; i<=num; i++){
    factorial *= i;
  }
  return factorial;
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
