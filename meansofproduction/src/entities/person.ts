import {PersonName} from "../valueItems/personName"
import {Email} from "../valueItems/email";

export class Person {
    public readonly id: string
    public readonly name: PersonName
    public readonly emails: Email[]

    constructor(id: string, name: PersonName, emails: Email[] = []) {
        this.id = id
        this.name = name
        this.emails = emails
    }
}

