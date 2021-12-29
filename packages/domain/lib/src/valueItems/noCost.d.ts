import { IBorrowCost } from "./borrowCost";
export declare class NoCost implements IBorrowCost {
    get amount(): number;
    subtract(other: IBorrowCost): IBorrowCost;
    add(other: IBorrowCost): IBorrowCost;
    clone(): IBorrowCost;
}
//# sourceMappingURL=noCost.d.ts.map