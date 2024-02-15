import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const nums = {
    first: 3,
    second: 2,
  };

  test('should add two numbers', () => {
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: Action.Add,
    });
    expect(result).toBe(nums.first + nums.second);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: Action.Subtract,
    });
    expect(result).toBe(nums.first - nums.second);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: Action.Multiply,
    });
    expect(result).toBe(nums.first * nums.second);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: Action.Divide,
    });
    expect(result).toBe(nums.first / nums.second);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: Action.Exponentiate,
    });
    expect(result).toBe(nums.first ** nums.second);
  });

  test('should return null for invalid action', () => {
    const invalidAction = '~';
    const result = simpleCalculator({
      a: nums.first,
      b: nums.second,
      action: invalidAction,
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const notNumericValue = '23';
    const result = simpleCalculator({
      a: notNumericValue,
      b: nums.second,
      action: Action.Divide,
    });
    expect(result).toBeNull();
  });
});
