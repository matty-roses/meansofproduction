import {IMoney} from "./IMoney";


export class NoMoney implements IMoney{
    get amount(): number{
        return 0;
    }

    get currencyName(): string{
        return "None";
    }

    equals(other: IMoney): boolean {
        return other.amount === 0;
    }

    greaterThan(other: IMoney): boolean {
        return 0 > other.amount;
    }

    lessThan(other: IMoney): boolean {
        return 0 < other.amount;
    }

}