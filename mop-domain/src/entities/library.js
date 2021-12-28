"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributedLibraryWithFees = void 0;
const money_1 = require("../valueItems/money");
class DistributedLibraryWithFees {
    _name;
    maxFees;
    _borrowers;
    _userIDsAndFees;
    _lenders;
    _thingRepository;
    constructor(name, maxFees, lenders, borrowers, thingRepository) {
        this._name = name;
        this.maxFees = maxFees;
        this._userIDsAndFees = {};
        this._lenders = lenders;
        this._thingRepository = thingRepository;
        this._borrowers = borrowers;
    }
    get name() {
        return this._name;
    }
    get chargesFees() {
        return true;
    }
    canBorrow(borrower) {
        const ids = this._borrowers.map(b => b.id);
        if (!(borrower.id in ids)) {
            return false;
        }
        if (borrower.id in this._userIDsAndFees) {
            const amountInFees = this._userIDsAndFees[borrower.id];
            return amountInFees.amount <= this.maxFees.amount;
        }
        return true;
    }
    getFeesOwned(borrower) {
        if (!(borrower.id in this._userIDsAndFees)) {
            return money_1.Money.None;
        }
        return this._userIDsAndFees[borrower.id];
    }
    get allItems() {
        const res = [];
        for (const lender in this._lenders) {
            for (const item in lender.items) {
                yield item;
            }
        }
    }
    get availableItems() {
        items = this.allItems.fil;
    }
    availableItems;
    borrowers;
    borrow(item, until) {
        return undefined;
    }
    getPoints(borrower) {
        return 0;
    }
    return(loan) {
        return undefined;
    }
}
exports.DistributedLibraryWithFees = DistributedLibraryWithFees;
//# sourceMappingURL=library.js.map