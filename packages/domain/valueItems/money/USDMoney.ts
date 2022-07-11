import {IMoney} from "./IMoney";
import {DifferentTypesOfMoney} from "../exceptions";


export class USDMoney implements IMoney{
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

    add(other: IMoney): IMoney {
        if(!(other instanceof USDMoney)){
            throw new DifferentTypesOfMoney();
        }
        return new USDMoney(this.amount + other.amount)
    }

    any(): boolean {
        return this.amount > 0
    }

    multiply(amount: number): IMoney {
        return new USDMoney(this.amount * amount)
    }

}