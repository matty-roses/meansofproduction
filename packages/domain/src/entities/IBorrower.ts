import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";

export interface IBorrower {
    readonly id: string
    readonly verificationFlags: BorrowerVerificationFlags[];
}