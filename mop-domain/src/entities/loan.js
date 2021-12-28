"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const loanStatus_1 = require("../valueItems/loanStatus");
const thingStatus_1 = require("../valueItems/thingStatus");
class Loan {
    id;
    item;
    borrower;
    dueDate;
    _active = true;
    _dateReturned;
    _status;
    returnLocation;
    constructor(id, item, borrower, dueDate, status = loanStatus_1.LoanStatus.LOANED, returnLocation = null, dateReturned) {
        this.id = id;
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
        this._dateReturned = dateReturned;
    }
    get lender() {
        if (this.item.owner) {
            return this.item.owner;
        }
        return null;
    }
    get active() {
        return this._active;
    }
    set active(val) {
        this._active = val;
    }
    get dateReturned() {
        return this._dateReturned;
    }
    get status() {
        return this._status;
    }
    startReturn() {
        this.lender?.startReturn(this);
        this._dateReturned = new Date();
    }
    markItemDamaged() {
        this.lender?.finishReturn(this);
        this._status = loanStatus_1.LoanStatus.RETURNED_DAMAGED;
        this.item.status = thingStatus_1.ThingStatus.DAMAGED;
    }
}
exports.Loan = Loan;
//# sourceMappingURL=loan.js.map