import { ThingStatus} from "./thingStatus";

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