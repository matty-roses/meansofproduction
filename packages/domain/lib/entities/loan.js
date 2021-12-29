import { LoanStatus } from "../valueItems/loanStatus";
import { ThingStatus } from "../valueItems/thingStatus";
export class Loan {
    id;
    item;
    borrower;
    dueDate;
    _dateReturned;
    _status;
    returnLocation;
    constructor(id, item, borrower, dueDate, status = LoanStatus.LOANED, returnLocation = null, dateReturned) {
        this.id = id;
        this.item = item;
        this.borrower = borrower;
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
        return this._status === LoanStatus.LOANED;
    }
    get dateReturned() {
        return this._dateReturned;
    }
    get status() {
        return this._status;
    }
    startReturn() {
        this.lender?.startReturn(this);
        this._status = LoanStatus.RETURN_STARTED;
        this._dateReturned = new Date();
    }
    markItemDamaged() {
        this.lender?.finishReturn(this);
        this._status = LoanStatus.RETURNED_DAMAGED;
        this.item.status = ThingStatus.DAMAGED;
    }
}
//# sourceMappingURL=loan.js.map