import { getRandomUUID } from "../utils/uuid_gen.util";
import { CurrencyEnum } from "./currency.enum";
import { Transaction } from "./transaction";

export class Card {
    constructor(private transactions: Transaction[] = []) {}

    getTransaction(id: string) {
        return this.transactions.find((value) => value.id === id);
    }

    getBalance(currency: CurrencyEnum) {
        return this.transactions
            .filter((value) => value.currency === currency)
            .map((transaction) => transaction.amount)
            .reduce((acc, curr) => acc + curr, 0);
    }

    addTransaction(
        transactionOrCurrency: Transaction | CurrencyEnum,
        amount?: number
    ) {
        if (transactionOrCurrency instanceof Transaction) {
            this.transactions.push(transactionOrCurrency);
            return transactionOrCurrency.id;
        } else {
            const transaction = new Transaction(amount, transactionOrCurrency);
            this.transactions.push(transaction);
            return transaction.id;
        }
    }
}
