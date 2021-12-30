import {PersonName} from "../valueItems/personName";
import {EmailAddress} from "../valueItems/emailAddress";
import {IEntity} from "./IEntity";

export interface IPerson extends IEntity<IPerson>{
    id: string;
    name: PersonName;
    emails: EmailAddress[];
}