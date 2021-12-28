export interface IBorrowCost {
    readonly amount: number;
    subtract(other: IBorrowCost): IBorrowCost;
    add(other: IBorrowCost): IBorrowCost;
    clone(): IBorrowCost;
}
export declare class NumericBorrowCost implements IBorrowCost {
    private readonly _amount;
    constructor(amount: number);
    get amount(): number;
    subtract(other: IBorrowCost): IBorrowCost;
    add(other: IBorrowCost): IBorrowCost;
    clone(): IBorrowCost;
}
