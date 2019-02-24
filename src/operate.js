export {operate};

const Big = require('big.js');

function divide(num_1, num_2) {
  if(num_2.toString() == '0') {
    return 'Not a Number';
  } else {
  return num_1.div(num_2).toString();
  }
}

function operate(num1, operation, num2) {
  const num_1 = new Big(num1);
  const num_2 = new Big(num2);

  switch (operation) {
    case '+':
      return num_1.add(num_2).toString();
    case '-':
      return num_1.minus(num_2).toString();
    case '*':
      return num_1.times(num_2).toString();
    case '/':
      return divide(num_1, num_2);


  }
}
