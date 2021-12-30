import { PersonName } from "../valueItems/personName";
import { EmailAddress } from "../valueItems/emailAddress";
export declare class Person {
    readonly id: string;
    readonly name: PersonName;
    readonly emails: EmailAddress[];
    constructor(id: string, name: PersonName, emails?: EmailAddress[]);
}
