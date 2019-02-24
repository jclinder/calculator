import {operate} from './operate';

test('if 5 divided by 2 equals 2.5', () => {
  const num1 = 5;
  const num2 = 2;
  const op = "/"
  const expResult = '2.5'
  expect(operate(num1, op, num2)).toBe(expResult);
});
