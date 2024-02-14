import { simpleCalculator, Action } from './index';

const nums = {
  first: 3,
  second: 2,
};

const testCases = [
  {
    name: 'should add two numbers',
    a: nums.first,
    b: nums.second,
    action: Action.Add,
    expected: nums.first + nums.second,
  },
  {
    name: 'should subtract two numbers',
    a: nums.first,
    b: nums.second,
    action: Action.Subtract,
    expected: nums.first - nums.second,
  },
  {
    name: 'should multiply two numbers',
    a: nums.first,
    b: nums.second,
    action: Action.Multiply,
    expected: nums.first * nums.second,
  },
  {
    name: 'should divide two numbers',
    a: nums.first,
    b: nums.second,
    action: Action.Divide,
    expected: nums.first / nums.second,
  },
  {
    name: 'should exponentiate two numbers',
    a: nums.first,
    b: nums.second,
    action: Action.Exponentiate,
    expected: nums.first ** nums.second,
  },
  {
    name: 'should return null for invalid action',
    a: nums.first,
    b: nums.second,
    action: '~',
    expected: null,
  },
  {
    name: 'should return null for invalid arguments',
    a: '23',
    b: nums.second,
    action: Action.Add,
    expected: null,
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)('$name', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
