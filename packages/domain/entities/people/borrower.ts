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

    constructor(id: string, name: PersonName, library: ILibrary,
                emails: EmailAddress[] = [], verificationFlags: BorrowerVerificationFlags[] = [],
                fees: ILibraryFee[] = []) {
        super(id, name, emails)
        this.verificationFlags = verificationFlags
        this.library = library
        this.fees = fees
    }

    readonly fees: Iterable<ILibraryFee>;
    readonly library: ILibrary;
}