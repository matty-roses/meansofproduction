import {PersonName} from "../valueItems/personName";
import {Person} from "./person";
import {EmailAddress} from "../valueItems/emailAddress";
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";

export interface IBorrower {
    readonly id: string
    readonly verificationFlags: BorrowerVerificationFlags[];
}

export class Borrower extends Person implements IBorrower {
    public readonly verificationFlags: BorrowerVerificationFlags[]

    constructor(id: string, name: PersonName,
                emails: EmailAddress[] = [], verificationFlags: BorrowerVerificationFlags[] = []) {
        super(id, name, emails)
        this.verificationFlags = verificationFlags
    }
}