import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
} from '.';

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
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
