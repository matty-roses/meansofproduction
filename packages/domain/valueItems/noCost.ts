import {IBorrowCost} from "./borrowCost";

export class NoCost implements IBorrowCost {
    get amount(): number {
        return 0
    }

    subtract(other: IBorrowCost): IBorrowCost {
        throw new Error("NoCost cannot subtract")
    }

    add(other: IBorrowCost): IBorrowCost {
        throw new Error("NoCost cannot add")
    }

    clone(): IBorrowCost {
        return new NoCost()
    }
}