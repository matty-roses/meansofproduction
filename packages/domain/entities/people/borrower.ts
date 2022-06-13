import {PersonName} from "../../valueItems/personName";
import {Person} from "./person";
import {EmailAddress} from "../../valueItems/emailAddress";
import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags";
import {IBorrower} from "./IBorrower"
import {ILibraryFee} from "../libraries/ILibraryFee";
import {ILibrary} from "../libraries/ILibrary";

// this is effectively the library card
export class Borrower extends Person implements IBorrower {
    public readonly verificationFlags: BorrowerVerificationFlags[]

    constructor(id: string, name: PersonName,
                emails: EmailAddress[] = [], verificationFlags: BorrowerVerificationFlags[] = []) {
        super(id, name, emails)
        this.verificationFlags = verificationFlags
    }

    readonly fees: Iterable<ILibraryFee>;
    readonly library: ILibrary;
}