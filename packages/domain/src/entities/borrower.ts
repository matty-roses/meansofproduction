import {PersonName} from "../valueItems/personName";
import {Person} from "./person";
import {EmailAddress} from "../valueItems/emailAddress";
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";
import {IBorrower} from "./IBorrower"


export class Borrower extends Person implements IBorrower {
    public readonly verificationFlags: BorrowerVerificationFlags[]

    constructor(id: string, name: PersonName,
                emails: EmailAddress[] = [], verificationFlags: BorrowerVerificationFlags[] = []) {
        super(id, name, emails)
        this.verificationFlags = verificationFlags
    }

    static from_dict(dict: Record<string, string | Record<string, any>>): IBorrower {
        const email_entry = dict["emails"]
        const emails = Array.isArray(email_entry)? email_entry : []

        const name = new PersonName(
            dict["name"]["firstName"],
            dict["name"]["lastName"],
            ["middleName"] in dict["name"]?dict["name"]["middleName"]:null
        )
        return new Borrower(
            dict["id"].toString(),
            name,
            emails,
            verificationFlags
        )
    }
}