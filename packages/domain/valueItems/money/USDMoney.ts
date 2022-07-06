import {IMoney} from "./IMoney";


class USDMoney implements IMoney{
    readonly amount: number;
    readonly currencyName: string;

    constructor(amount: number) {
        this.amount = amount;
        this.currencyName = "USD";
    }

    equals(other: IMoney): boolean {
        return false;
    }

    greaterThan(other: IMoney): boolean {
        return false;
    }

    lessThan(other: IMoney): boolean {
        return false;
    }

}