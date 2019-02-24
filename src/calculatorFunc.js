import {operate} from './operate';
export {isNumber, calculator};

//function to check if a button is a number
function isNumber(num) {
  return (/[0-9]/.test(num));
}

//function for handling input of buttonNames
function calculator (buttonName, status) {
  const current = status.current;
  const operation = status.operation;
  const storedNum = status.storedNum; //a number that is saved because user chose an operation.


  if(buttonName == '=') {
    if(operation && !storedNum) { //if user has a number on screen, has selected an operator, but not started entering another number
      return {
        current: operate(current, operation, current),
        storedNum: null,
        operation: null
    }
  }
    if(operation && storedNum) {
      return {
        current: operate(storedNum, operation, current),
        storedNum: null,
        operation: null
      }
    }
    if(current && !operation) {
      return {
        current: current,
        storedNum: storedNum,
        operation: operation
      }
    }
  }


  if(buttonName == '+/-' && current != 'Not a Number'){
    if(!/\-/.test(status.current)) {
      return {
        current: '-' + current,
        storedNum: storedNum,
        operation: operation
      }
    } else {
      return {
        current: current.substring(1),
        storedNum: storedNum,
        operation: operation
      }
    }
  }

  if(buttonName == "." && current != 'Not a Number') {
    if(!/\./.test(current)) {
      return {
        current: current + '.',
        storedNum: storedNum,
        operation: operation
      }
    }
      return {};
  }

  if(isNumber(buttonName)) {
    if(current && operation && !storedNum) { //if there's a current number and an operation, the next number entered should change the display to show the new number
      return {
        storedNum : current,
        current : buttonName,
        operation: operation
      }
    }
    if(current == '0' | current == 'Not a Number') { //if display is zero, replace the zero to prevent users from stacking zeros at front of numbers
      return {
        current: buttonName,
        storedNum: storedNum,
        operation: operation
      };
    }
    return {
      current: current + buttonName,
      storedNum: storedNum,
      operation: operation
    };
    //append number to current, unless number has reached max display size
    //ADD MAX DISPLAY SIZE CHECK
  }

  if(buttonName == 'AC') {
    return {
      current : 0,
      operation : null,
      storedNum : null
    };
  }

  else { //buttonName must be an operation
    if(!storedNum && current && current != 'Not a Number') { //if there's no stored number, the user needs to select an operation, or the user is updating the operation
      return {
        current: current,
        operation: buttonName,
        storedNum: storedNum
      };
    }
    if(operation && current && storedNum) { //if there are two numbers to operate with, evaluate operation
        return {
          current: operate(storedNum, operation, current),
          storedNum: null,
          operation: buttonName //since user initiated calc w/ an operation, save the operation
      }
    }
    //implicit: if no storedNum | current, do nothing
      return {
        current: current,
        storedNum: storedNum,
        operation: operation
      };
  }

}
