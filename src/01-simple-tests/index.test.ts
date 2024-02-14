// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const nums = {
    first: 3,
    second: 2,
  };

  test('should add two numbers', () => {
    const result = simpleCalculator({ a: nums.first, b: nums.second, action: Action.Add });
    expect(result).toBe(nums.first + nums.second);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: nums.first, b: nums.second, action: Action.Subtract });
    expect(result).toBe(nums.first - nums.second);
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
