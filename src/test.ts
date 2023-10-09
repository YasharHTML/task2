import { Card, CurrencyEnum, Transaction } from ".";

const card = new Card();

const transactionId0 = card.addTransaction(CurrencyEnum.USD, 3);
const transactionId1 = card.addTransaction(CurrencyEnum.UAH, 4);
const transactionId2 = card.addTransaction(CurrencyEnum.UAH, 5);
const transactionId3 = card.addTransaction(CurrencyEnum.USD, 3);
const transactionId4 = card.addTransaction(CurrencyEnum.USD, 3);
const transactionId5 = card.addTransaction(CurrencyEnum.USD, 3);

console.log(transactionId0);

const balanceUSD = card.getBalance(CurrencyEnum.USD);
const balanceUAH = card.getBalance(CurrencyEnum.UAH);

console.log({ balanceUSD, balanceUAH });

const createdTransactionId = card.addTransaction(
    new Transaction(15, CurrencyEnum.USD)
);

console.log(card.getTransaction(createdTransactionId));
