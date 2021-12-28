"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidThingStatusToBorrow = exports.InsufficientBorrowingCreditAvailableError = exports.InsufficentBorrowerVerificationFlag = void 0;
class InsufficentBorrowerVerificationFlag extends Error {
    flag;
    constructor(flag) {
        super(`User does not have ${flag} but item requires it`);
        this.flag = flag;
    }
}
exports.InsufficentBorrowerVerificationFlag = InsufficentBorrowerVerificationFlag;
class InsufficientBorrowingCreditAvailableError extends Error {
    amountPresent;
    amountRequired;
    constructor(amountPresent, amountRequired) {
        super(`${amountRequired} was needed, but only have ${amountPresent}`);
        this.amountPresent = amountPresent;
        this.amountRequired = amountRequired;
    }
}
exports.InsufficientBorrowingCreditAvailableError = InsufficientBorrowingCreditAvailableError;
class InvalidThingStatusToBorrow extends Error {
    status;
    constructor(status) {
        super(`Attempting to borrow a thing with status of ${status}`);
        this.status = status;
    }
}
exports.InvalidThingStatusToBorrow = InvalidThingStatusToBorrow;
//# sourceMappingURL=exceptions.js.map