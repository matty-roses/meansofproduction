import {PersonName} from "../../valueItems/personName"
import {EmailAddress} from "../../valueItems/emailAddress";

export class Person {
    public readonly id: string
    public readonly name: PersonName
    public readonly emails: EmailAddress[]

    constructor(id: string, name: PersonName, emails: EmailAddress[] = []) {
        this.id = id
        this.name = name
        this.emails = emails
    }
}

