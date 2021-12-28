"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributedLibrary = void 0;
const thingStatus_1 = require("../../valueItems/thingStatus");
const loan_1 = require("../loan");
const loanStatus_1 = require("../../valueItems/loanStatus");
class DistributedLibrary {
    _name;
    maxFees;
    _borrowers;
    _userIDsAndFees;
    _lenders;
    constructor(name, maxFees, lenders, borrowers) {
        this._name = name;
        this.maxFees = maxFees;
        this._userIDsAndFees = {};
        this._lenders = lenders;
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
        return true;
    }
    get allItems() {
        const res = [];
        for (const lender of this._lenders) {
            for (const item of lender.items) {
                res.push(item);
            }
        }
        return res;
    }
    get availableItems() {
        const res = [];
        for (const item of this.allItems) {
            if (item.status === thingStatus_1.ThingStatus.READY) {
                res.push(item);
            }
        }
        return res;
    }
    getOwnerOfItem(item) {
        for (const lender of this._lenders) {
            for (const lenderItem of lender.items) {
                if (item.id === lenderItem.id) {
                    return lender;
                }
            }
        }
        return null;
    }
    makeLoanId() {
        return "guid";
    }
    borrow(item, borrower, until) {
        // get the lender for this item
        const lender = this.getOwnerOfItem(item);
        if (!lender) {
            throw new Error(`Cannot find owner of item ${item.id}`);
        }
        return new loan_1.Loan(this.makeLoanId(), item, borrower, until, loanStatus_1.LoanStatus.LOANED, lender.preferredReturnLocation(item));
    }
    return(loan) {
        // ping out to the borrower to start the return process
        loan.startReturn();
        return loan;
    }
}
exports.DistributedLibrary = DistributedLibrary;
//# sourceMappingURL=distributedLibrary.js.map