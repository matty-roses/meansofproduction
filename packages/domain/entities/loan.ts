import {IThing} from "./IThing";
import {LoanStatus} from "../valueItems/loanStatus";
import {IBorrower} from "./IBorrower";
import {Location} from "../valueItems/location";
import {ILender} from "./lenders/ILender";
import {ThingStatus} from "../valueItems/thingStatus";
import {ILoan} from "./ILoan"

export class Loan implements ILoan{
    public readonly id: string
    public readonly item: IThing
    public readonly borrower: IBorrower
    public readonly dueDate: Date
    private _dateReturned: Date | undefined
    private _status: LoanStatus
    public readonly returnLocation: Location

    public constructor(id: string, item: IThing, borrower: IBorrower, dueDate: Date, status: LoanStatus = LoanStatus.LOANED,
                       returnLocation: Location | null = null, dateReturned?: Date) {
        this.id = id
        this.item = item
        this.borrower = borrower
        this.dueDate = dueDate
        this._status = status
        if(returnLocation){
            this.returnLocation = returnLocation
        } else {
            this.returnLocation = item.storageLocation
        }
        this._dateReturned = dateReturned
    }
    public get lender(): ILender | null {
        if(this.item.owner){
            return this.item.owner
        }
        return null
    }

    public get active(): boolean {
        return this._status === LoanStatus.LOANED
    }
    public get dateReturned(): Date | undefined{
        return this._dateReturned
    }
    public get status(): LoanStatus {
        return this._status
    }

    public startReturn() {
        this.lender?.startReturn(this)
        this._status = LoanStatus.RETURN_STARTED
        this._dateReturned = new Date()
    }

    public markItemDamaged() {
        this.lender?.finishReturn(this)
        this._status = LoanStatus.RETURNED_DAMAGED
        this.item.status = ThingStatus.DAMAGED
    }
}