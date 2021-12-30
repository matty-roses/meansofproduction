import {ILoan, Loan} from "../loan";
import {Person} from "../person";
import {ILender} from "./ILender";
import {PersonName} from "../../valueItems/personName";
import {EmailAddress} from "../../valueItems/emailAddress";
import {Location} from "../../valueItems/location";
import {IThing} from "../IThing";

/*
Class to represent the lenders in a distributed library
 */
export class IndividualDistributedLender extends Person implements ILender{
    private readonly _items: Iterable<IThing>
    private readonly _returnLocationOverride: Location | undefined

    constructor(id: string, name: PersonName, emails: EmailAddress[] = [], items: Iterable<IThing>, returnLocationOverride?: Location){
        super(id, name, emails)
        this._items = items
        this._returnLocationOverride = returnLocationOverride
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

    preferredReturnLocation(item: IThing): Location{
        if (this._returnLocationOverride){ return this._returnLocationOverride}
        return item.storageLocation
    }
}
