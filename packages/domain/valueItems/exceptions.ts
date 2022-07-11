import { ThingStatus} from "./thingStatus";
import { BorrowerVerificationFlags} from "./borrowerVerificationFlags";

export class InsufficentBorrowerVerificationFlag extends Error{
    public readonly flag: BorrowerVerificationFlags

    constructor(flag: BorrowerVerificationFlags) {
        super(`User does not have ${flag} but item requires it`)
        this.flag = flag
    }
}

export class InsufficientBorrowingCreditAvailableError extends Error{
    public readonly amountPresent: number
    public readonly amountRequired: number

    constructor(amountPresent: number, amountRequired: number) {
        super(`${amountRequired} was needed, but only have ${amountPresent}`);
        this.amountPresent = amountPresent
        this.amountRequired = amountRequired
    }
}

export class InvalidThingStatusToBorrow extends Error{
    public readonly status: ThingStatus

    constructor(status: ThingStatus) {
        super(`Attempting to borrow a thing with status of ${status}`);
        this.status = status
    }
}

export class DifferentTypesOfMoney extends Error{

}

export class NotImplemented extends Error{
    constructor() {
        super("Not Implemented");
    }
}