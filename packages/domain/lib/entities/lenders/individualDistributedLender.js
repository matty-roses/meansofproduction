import { Person } from "../person";
/*
Class to represent the lenders in a distributed library
 */
export class IndividualDistributedLender extends Person {
    _items;
    _returnLocationOverride;
    constructor(id, name, emails = [], items, returnLocationOverride) {
        super(id, name, emails);
        this._items = items;
        this._returnLocationOverride = returnLocationOverride;
    }
    startReturn(loan) {
        // ping out the item to accept this return!
        return loan;
    }
    finishReturn(loan) {
        // todo - see the user actions to determine the status
        return loan;
    }
    get items() {
        return this._items;
    }
    preferredReturnLocation(item) {
        if (this._returnLocationOverride) {
            return this._returnLocationOverride;
        }
        return item.storageLocation;
    }
}
//# sourceMappingURL=individualDistributedLender.js.map