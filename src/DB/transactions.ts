import { Transaction } from "../models/models";
import accounts from "./accounts";
import months from "./months";
import transactionTypes from "./transaction-types";

var transactions: Transaction[] = [
  //student loan
  new Transaction(
    1,
    "",
    accounts[5],
    months[0],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    2,
    "",
    accounts[5],
    months[1],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    3,
    "",
    accounts[5],
    months[2],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    4,
    "",
    accounts[5],
    months[3],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    5,
    "",
    accounts[5],
    months[4],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    6,
    "",
    accounts[5],
    months[5],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    7,
    "",
    accounts[5],
    months[6],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    8,
    "",
    accounts[5],
    months[7],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    9,
    "",
    accounts[5],
    months[8],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    10,
    "",
    accounts[5],
    months[9],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    11,
    "",
    accounts[5],
    months[10],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  new Transaction(
    12,
    "",
    accounts[5],
    months[11],
    transactionTypes[2],
    accounts[5].getPaymentAmount()
  ),
  //mortgage
  new Transaction(
    13,
    "",
    accounts[6],
    months[0],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    14,
    "",
    accounts[6],
    months[1],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    15,
    "",
    accounts[6],
    months[2],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    16,
    "",
    accounts[6],
    months[3],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    17,
    "",
    accounts[6],
    months[4],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    18,
    "",
    accounts[6],
    months[5],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    19,
    "",
    accounts[6],
    months[6],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    20,
    "",
    accounts[6],
    months[7],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    21,
    "",
    accounts[6],
    months[8],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    22,
    "",
    accounts[6],
    months[9],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    23,
    "",
    accounts[6],
    months[10],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  new Transaction(
    24,
    "",
    accounts[6],
    months[11],
    transactionTypes[2],
    accounts[6].getPaymentAmount()
  ),
  //apple card
  new Transaction(
    25,
    "",
    accounts[7],
    months[0],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    26,
    "",
    accounts[7],
    months[1],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    27,
    "",
    accounts[7],
    months[2],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    28,
    "",
    accounts[7],
    months[3],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    29,
    "",
    accounts[7],
    months[4],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    30,
    "",
    accounts[7],
    months[5],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    31,
    "",
    accounts[7],
    months[6],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    32,
    "",
    accounts[7],
    months[7],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    33,
    "",
    accounts[7],
    months[8],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    34,
    "",
    accounts[7],
    months[9],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    35,
    "",
    accounts[7],
    months[10],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  new Transaction(
    36,
    "",
    accounts[7],
    months[11],
    transactionTypes[2],
    accounts[7].getPaymentAmount()
  ),
  //discover
  new Transaction(
    37,
    "",
    accounts[9],
    months[0],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    38,
    "",
    accounts[9],
    months[1],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    39,
    "",
    accounts[9],
    months[2],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    40,
    "",
    accounts[9],
    months[3],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    41,
    "",
    accounts[9],
    months[4],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    42,
    "",
    accounts[9],
    months[5],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    43,
    "",
    accounts[9],
    months[6],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    44,
    "",
    accounts[9],
    months[7],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    45,
    "",
    accounts[9],
    months[8],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    46,
    "",
    accounts[9],
    months[9],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    47,
    "",
    accounts[9],
    months[10],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),
  new Transaction(
    48,
    "",
    accounts[9],
    months[11],
    transactionTypes[2],
    accounts[9].getPaymentAmount()
  ),

  //deposits
  new Transaction(49, "", accounts[8], months[9], transactionTypes[1], 1000.0),
  new Transaction(50, "", accounts[8], months[3], transactionTypes[1], 650.0),
  new Transaction(51, "", accounts[3], months[6], transactionTypes[1], 155.0),
  new Transaction(52, "", accounts[3], months[4], transactionTypes[1], 834.0),
  new Transaction(53, "", accounts[3], months[1], transactionTypes[1], 220.0),
  //charges
  new Transaction(54, "", accounts[9], months[7], transactionTypes[0], 227.36),
  new Transaction(55, "", accounts[9], months[2], transactionTypes[0], 788.1),
  new Transaction(56, "", accounts[7], months[5], transactionTypes[0], 16.88),
  new Transaction(57, "", accounts[7], months[11], transactionTypes[0], 29.78),
  new Transaction(58, "", accounts[7], months[10], transactionTypes[0], 2500.0),
];

export default transactions;
