import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';
import lodash from 'lodash';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalanceValue = 1000;
    const bankAccount = getBankAccount(initialBalanceValue);
    expect(bankAccount).toBeInstanceOf(BankAccount);
    expect(bankAccount.getBalance()).toBe(initialBalanceValue);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(1000);
    expect(() => {
      return bankAccount.withdraw(bankAccount.getBalance() * 2);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccount = getBankAccount(1000);
    const anotherBankAccount = getBankAccount(2000);
    expect(() => {
      return bankAccount.transfer(
        bankAccount.getBalance() * 2,
        anotherBankAccount,
      );
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccount = getBankAccount(1000);
    expect(() => {
      return bankAccount.transfer(bankAccount.getBalance(), bankAccount);
    }).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const depositValue = 100;
    const bankAccount = getBankAccount(1000);
    const beforeDepositBalance = bankAccount.getBalance();
    bankAccount.deposit(depositValue);

    expect(bankAccount.getBalance()).toBe(beforeDepositBalance + depositValue);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(1000);
    const beforeWithdrawBalance = bankAccount.getBalance();
    const withdrawAmount = beforeWithdrawBalance / 2;
    bankAccount.withdraw(withdrawAmount);

    expect(bankAccount.getBalance()).toBe(
      beforeWithdrawBalance - withdrawAmount,
    );
  });

  test('should transfer money', () => {
    const bankAccount = getBankAccount(1000);
    const beforeAccountBalance = bankAccount.getBalance();
    const anotherBankAccount = getBankAccount(1000);
    const beforeAnotherAccountBalance = anotherBankAccount.getBalance();
    const withdrawAmount = beforeAccountBalance / 2;

    bankAccount.transfer(withdrawAmount, anotherBankAccount);
    expect(bankAccount.getBalance()).toBe(
      beforeAccountBalance - withdrawAmount,
    );
    expect(anotherBankAccount.getBalance()).toBe(
      beforeAnotherAccountBalance + withdrawAmount,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bankAccount = getBankAccount(1000);
    const randomBalance = 10;
    const randomRequestFailed = 1;
    jest
      .spyOn(lodash, 'random')
      .mockReturnValueOnce(randomBalance)
      .mockReturnValueOnce(randomRequestFailed);
    await expect(bankAccount.fetchBalance()).resolves.toBe(randomBalance);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(1000);
    const fetchBalanceResolvedValue = 10;
    jest
      .spyOn(bankAccount, 'fetchBalance')
      .mockResolvedValue(fetchBalanceResolvedValue);
    await bankAccount.synchronizeBalance();
    expect(bankAccount.getBalance()).toBe(fetchBalanceResolvedValue);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(1000);
    const fetchBalanceResolvedValue = null;
    jest
      .spyOn(bankAccount, 'fetchBalance')
      .mockResolvedValue(fetchBalanceResolvedValue);
    await expect(bankAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
