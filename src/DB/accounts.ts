import { Account } from "../models/models";
import accountTypes from "./account-types";

var accounts: Account[] = [
  new Account(1, "Netflix", accountTypes[0], 15.99, 0.0),
  new Account(2, "Hulu", accountTypes[0], 11.49, 0.0),
  new Account(3, "Audible", accountTypes[0], 12.99, 0.0),
  new Account(4, "Chase", accountTypes[2], 0.0, 5000.0),
  new Account(5, "LinkedIn", accountTypes[0], 30.0, 0.0),
  new Account(6, "Student Loan Company", accountTypes[2], 500.0, 32000.0),
  new Account(7, "Mortgage Company", accountTypes[3], 1500.3, 546000.0),
  new Account(8, "Apple Card", accountTypes[1], 300.0, 1000.0),
  new Account(9, "Bank of America", accountTypes[2], 0.0, 300.0),
  new Account(10, "Discover", accountTypes[1], 150.0, 650.0),
];

export default accounts;
