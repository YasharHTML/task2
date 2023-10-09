import { getRandomUUID } from "../utils/uuid_gen.util";
import { CurrencyEnum } from "./currency.enum";

export class Transaction {
    id: string;
    constructor(public amount: number, public currency: CurrencyEnum) {
        this.id = getRandomUUID();
    }
}
