import {Thing} from "./thing";
import {LoanStatus} from "../valueItems/loanStatus";
import {ThingStatus} from "../valueItems/thingStatus";
import {Borrower} from "./borrower";
import {Location} from "../valueItems/location";
import {ILender} from "./lenders/ILender";

export class Loan {
    public readonly item: Thing
    public readonly borrower: Borrower
    public readonly dueDate: Date
    private _active: boolean = true
    private _status: LoanStatus = LoanStatus.LOANED
    public readonly returnLocation: Location

    public constructor(item: Thing, borrower: Borrower, dueDate: Date, status: LoanStatus = LoanStatus.LOANED,
                       returnLocation: Location | null = null) {
        this.item = item
        this.borrower = borrower
        this._active = true
        this.dueDate = dueDate
        this._status = status
        if(returnLocation){
            this.returnLocation = returnLocation
        } else {
            this.returnLocation = item.storageLocation
        }
    }
    public get lender(): ILender | null {
        if(this.item.owner){
            return this.item.owner
        }
        return null
    }
    public get status(): LoanStatus{
        return this._status
    }

    public set status(status: LoanStatus) {
        this._status = status
        if(status === LoanStatus.RETURNED) {
            this.item.status = ThingStatus.READY
            this.active = false
        }
        if(status === LoanStatus.RETURNED_DAMAGED){
            this.item.status = ThingStatus.DAMAGED
            this.active = false
        }
    }

    public get active(): boolean {
        return this._active
    }
    public set active(val: boolean){
        this._active = val
    }

}