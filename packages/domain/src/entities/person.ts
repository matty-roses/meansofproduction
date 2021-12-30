import {PersonName} from "../valueItems/personName"
import {EmailAddress} from "../valueItems/emailAddress";
import {IPerson} from "./IPerson";

export class Person implements IPerson {
    readonly id: string
    readonly name: PersonName
    readonly emails: EmailAddress[]

    constructor(id: string, name: PersonName, emails: EmailAddress[] = []) {
        this.id = id
        this.name = name
        this.emails = emails
    }
}

