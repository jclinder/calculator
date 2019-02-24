import {isNumber, calculator} from './calculatorFunc'
import {operate} from './operate'

test('if "f" is a number', () => {
  expect(isNumber('#')).toBeFalsy();
})

//checking evaluating expressions and other actions
test('AC clearing state', () => {
  const inputState = {
    storedNum: '2',
    operation: '*',
    current: '2'
  };
  const buttonName = 'AC';
  const outputState = {
    storedNum: null,
    operation: null,
    current: 0
  };

  expect(calculator(buttonName, inputState)).toEqual(outputState);
});

test('evaluating with just a display number and operator executes display[operator]display', () => {
  const inputState = {
    storedNum: null,
    operation: '*',
    current: '2'
  };
  const buttonName = '=';
  const outputState = {
    storedNum: null,
    operation: null,
    current: '4'
  };
  expect(calculator(buttonName, inputState)).toEqual(outputState);
})

test('user can switch sign from "-" to positive to negative', () => {
  const inputState = {
    storedNum: null,
    operation: '*',
    current: '-25'
  };
  const buttonName = '+/-';
  const outputState = {
    current: '25',
    storedNum: null,
    operation: '*'
  }
  expect(calculator(buttonName, inputState)).toEqual(outputState);
})

test('appending number to display of zero', () => {
  const inputState = {
    storedNum: '23',
    operation: '*',
    current: '0'
  };
  const buttonName = '.';
  const outputState = {
    current: '0.',
    storedNum: '23',
    operation: '*'
  }
  expect(calculator(buttonName, inputState)).toEqual(outputState);
})

test('if pressing a number button when display "0" replaces zero', () => {
const inputState = {
  storedNum: '23',
  operation: '*',
  current: '0'
};
const buttonName = '2';
const outputState = {
  current: '2',
  storedNum: '23',
  operation: '*'
}
  expect(calculator(buttonName, inputState)).toEqual(outputState)
})

//Test that number inputs work correctly
test('if number buttons append to display', () => {
const inputState = {
  storedNum: '25',
  operation: '*',
  current: '2'
};
const buttonName = '3';
const outputState = {
  storedNum: '25',
  operation: '*',
  current: '23'
}
  expect(calculator(buttonName, inputState)).toEqual(outputState)
})

test('if pressing button after an operation has been stored initiates new display number', () => {
const inputState = {
  storedNum: null,
  operation: '*',
  current: '21'
};
const buttonName = '3';
const outputState = {
  storedNum: '21',
  current: '3',
  operation: '*'
}
  expect(calculator(buttonName, inputState)).toEqual(outputState)
})

//check operation inputs
test('inputting operator when "bases are full" evaluates operation', () => {
  const inputState = {
    storedNum: '5',
    operation: '*',
    current: '25'
  };
  const buttonName = '/';
  const outputState = {
    storedNum: null,
    operation: '/',
    current: '125'
  }
    expect(calculator(buttonName, inputState)).toEqual(outputState)
})
