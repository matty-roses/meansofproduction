"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualDistributedLender = void 0;
const person_1 = require("../person");
/*
Class to represent the lenders in a distributed library
 */
class IndividualDistributedLender extends person_1.Person {
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
exports.IndividualDistributedLender = IndividualDistributedLender;
//# sourceMappingURL=individualDistributedLender.js.map