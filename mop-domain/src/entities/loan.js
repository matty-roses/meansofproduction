"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const loanStatus_1 = require("../valueItems/loanStatus");
const thingStatus_1 = require("../valueItems/thingStatus");
class Loan {
    item;
    borrower;
    dueDate;
    _active = true;
    _status = loanStatus_1.LoanStatus.LOANED;
    returnLocation;
    constructor(item, borrower, dueDate, status = loanStatus_1.LoanStatus.LOANED, returnLocation = null) {
        this.item = item;
        this.borrower = borrower;
        this._active = true;
        this.dueDate = dueDate;
        this._status = status;
        if (returnLocation) {
            this.returnLocation = returnLocation;
        }
        else {
            this.returnLocation = item.storageLocation;
        }
    }
    get lender() {
        if (this.item.owner) {
            return this.item.owner;
        }
        return null;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
        if (status === loanStatus_1.LoanStatus.RETURNED) {
            this.item.status = thingStatus_1.ThingStatus.READY;
            this.active = false;
        }
        if (status === loanStatus_1.LoanStatus.RETURNED_DAMAGED) {
            this.item.status = thingStatus_1.ThingStatus.DAMAGED;
            this.active = false;
        }
    }
    get active() {
        return this._active;
    }
    set active(val) {
        this._active = val;
    }
}
exports.Loan = Loan;
//# sourceMappingURL=loan.js.map