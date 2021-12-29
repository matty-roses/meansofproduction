export interface IBorrowCost {
    readonly amount: number;
    subtract(other:IBorrowCost): IBorrowCost;
    add(other:IBorrowCost): IBorrowCost;
    clone(): IBorrowCost
}

export class NumericBorrowCost implements IBorrowCost {
    private readonly _amount: number

    constructor(amount: number) {
       this._amount = amount
    }

    get amount(): number {
        return this._amount
    }

    subtract(other: IBorrowCost): IBorrowCost {
        const amount = this.amount - other.amount
        return new NumericBorrowCost(amount)
    }

    add(other: IBorrowCost): IBorrowCost {
        return new NumericBorrowCost(this.amount + other.amount)
    }

    clone(): IBorrowCost {
        return new NumericBorrowCost(this.amount)
    }
}