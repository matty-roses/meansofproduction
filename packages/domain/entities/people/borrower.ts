import {PersonName} from "../../valueItems/personName";
import {Person} from "./person";
import {EmailAddress} from "../../valueItems/emailAddress";
import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags";
import {IBorrower} from "./IBorrower"
import {ILibraryFee} from "../libraries/ILibraryFee";
import {ILibrary} from "../libraries/ILibrary";

// this is effectively the library card
export class Borrower implements IBorrower {
    public readonly id: string
    public readonly verificationFlags: BorrowerVerificationFlags[]
    public readonly person: Person;

    constructor(id: string, person: Person, library: ILibrary, verificationFlags: BorrowerVerificationFlags[] = [],
                fees: ILibraryFee[] = []) {
        this.person = person;
        this.verificationFlags = verificationFlags
        this.library = library
        this.fees = fees
        this.id = id
    }

    readonly fees: Iterable<ILibraryFee>;
    readonly library: ILibrary;
}