import { ThingStatus } from "./thingStatus";
import { BorrowerVerificationFlags } from "./borrowerVerificationFlags";
export declare class InsufficentBorrowerVerificationFlag extends Error {
    readonly flag: BorrowerVerificationFlags;
    constructor(flag: BorrowerVerificationFlags);
}
export declare class InsufficientBorrowingCreditAvailableError extends Error {
    readonly amountPresent: number;
    readonly amountRequired: number;
    constructor(amountPresent: number, amountRequired: number);
}
export declare class InvalidThingStatusToBorrow extends Error {
    readonly status: ThingStatus;
    constructor(status: ThingStatus);
}
//# sourceMappingURL=exceptions.d.ts.map