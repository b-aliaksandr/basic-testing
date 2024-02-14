// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const firstNum = 2;
    const secondNum = 3;
    const result = simpleCalculator({ a: firstNum, b: secondNum, action: Action.Add });
    expect(result).toBe(firstNum + secondNum);
  });

  test('should subtract two numbers', () => {
    // Write your test here
  });

  test('should multiply two numbers', () => {
    // Write your test here
  });

  test('should divide two numbers', () => {
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
