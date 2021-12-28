import {ILoan, Loan} from "../loan";
import {Person} from "../person";
import {ILender} from "./ILender";
import {IThing} from "../thing";
import {PersonName} from "../../valueItems/personName";
import {EmailAddress} from "../../valueItems/emailAddress";
import {Location} from "../../valueItems/location";

/*
Class to represent the lenders in a distributed library
 */
export class IndividualDistributedLender extends Person implements ILender{
    private readonly _items: Iterable<IThing>

    constructor(id: string, name: PersonName, emails: EmailAddress[] = [], items: Iterable<IThing>){
        super(id, name, emails)
        this._items = items
    }

    startReturn(loan: ILoan): ILoan{
        // ping out the item to accept this return!
        return loan
    }
    finishReturn(loan: ILoan): ILoan {
        // todo - see the user actions to determine the status
        return loan
    }

    get items(): Iterable<IThing> {
        return this._items
    }

}
