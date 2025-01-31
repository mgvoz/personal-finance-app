import { TransactionType } from "../models/models";

var transactionTypes: TransactionType[] = [
  new TransactionType(1, "Charge"),
  new TransactionType(2, "Deposit"),
  new TransactionType(3, "Monthly Payment"),
];

export default transactionTypes;
