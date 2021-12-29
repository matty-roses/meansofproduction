export class InsufficentBorrowerVerificationFlag extends Error {
    constructor(flag) {
        super(`User does not have ${flag} but item requires it`);
        this.flag = flag;
    }
}
export class InsufficientBorrowingCreditAvailableError extends Error {
    constructor(amountPresent, amountRequired) {
        super(`${amountRequired} was needed, but only have ${amountPresent}`);
        this.amountPresent = amountPresent;
        this.amountRequired = amountRequired;
    }
}
export class InvalidThingStatusToBorrow extends Error {
    constructor(status) {
        super(`Attempting to borrow a thing with status of ${status}`);
        this.status = status;
    }
}
//# sourceMappingURL=exceptions.js.map