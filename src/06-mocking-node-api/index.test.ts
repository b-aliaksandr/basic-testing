import { doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const cb = jest.fn();
    const timeout = 0;

    doStuffByTimeout(cb, timeout);
    expect(setTimeout).toHaveBeenCalledWith(cb, timeout);
  });

  test('should call callback only after timeout', () => {
    const cb = jest.fn();
    const timeout = 0;

    doStuffByTimeout(cb, timeout);

    expect(cb).not.toHaveBeenCalled();

    jest.advanceTimersByTime(timeout);

    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const cb = jest.fn();
    const interval = 1000;

    doStuffByInterval(cb, interval);
    expect(setInterval).toHaveBeenCalledWith(cb, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    jest.spyOn(global, 'setInterval');
    const cb = jest.fn();
    const interval = 1000;
    const callsAmount = 3;

    doStuffByInterval(cb, interval);
    let i = 0;
    while (i < callsAmount) {
      jest.advanceTimersByTime(interval);
      i += 1;
    }
    expect(cb).toHaveBeenCalledTimes(callsAmount);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
