export class AccountType {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Account {
  id: number;
  name: string;
  type: AccountType;
  payment: number;
  balance: number;

  constructor(
    id: number,
    name: string,
    type: AccountType,
    payment: number,
    balance: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.payment = payment;
    this.balance = balance;
  }

  public getPaymentAmount() {
    return this.payment;
  }

  public getBalance() {
    return this.balance;
  }
}

export class Month {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class TransactionType {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Transaction {
  id: number;
  name: string;
  account: Account;
  month: Month;
  type: TransactionType;
  amount: number;

  constructor(
    id: number,
    name: string,
    account: Account,
    month: Month,
    type: TransactionType,
    amount: number
  ) {
    this.id = id;
    this.name = name;
    this.account = account;
    this.month = month;
    this.type = type;
    this.amount = amount;
  }
}

export class FilterState {
  accountTypeId: number;
  transactionTypeId: number;
  monthId: number;

  constructor(
    accountTypeId: number,
    transactionTypeId: number,
    monthId: number
  ) {
    this.accountTypeId = accountTypeId;
    this.transactionTypeId = transactionTypeId;
    this.monthId = monthId;
  }
}
