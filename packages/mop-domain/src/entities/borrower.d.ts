import { PersonName } from "../valueItems/personName";
import { Person } from "./person";
import { EmailAddress } from "../valueItems/emailAddress";
import { BorrowerVerificationFlags } from "../valueItems/borrowerVerificationFlags";
export interface IBorrower {
    readonly id: string;
    readonly verificationFlags: BorrowerVerificationFlags[];
}
export declare class Borrower extends Person implements IBorrower {
    readonly verificationFlags: BorrowerVerificationFlags[];
    constructor(id: string, name: PersonName, emails?: EmailAddress[], verificationFlags?: BorrowerVerificationFlags[]);
}
