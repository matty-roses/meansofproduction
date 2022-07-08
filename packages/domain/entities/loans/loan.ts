import {IThing} from "../things/IThing";
import {LoanStatus} from "../../valueItems/loanStatus";
import {IBorrower} from "../people/IBorrower";
import {Location} from "../../valueItems/location";
import {ILender} from "../lenders/ILender";
import {ThingStatus} from "../../valueItems/thingStatus";
import {ILoan} from "./ILoan"

export class Loan implements ILoan {
    public readonly id: string
    public readonly item: IThing
    public readonly borrower: IBorrower
    public readonly dueDate: Date | undefined
    private _dateReturned: Date | undefined
    private _status: LoanStatus
    public readonly returnLocation: Location

    public constructor(id: string, item: IThing, borrower: IBorrower, dueDate: Date | undefined, status: LoanStatus = LoanStatus.LOANED,
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

    public get lender(): ILender {
        return this.item.owner
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

    public startReturn(): ILoan {
        this._status = LoanStatus.RETURN_STARTED
        this._dateReturned = new Date()
        return this
    }

    public finishReturn(thingStatus: ThingStatus): ILoan {
        if(thingStatus == ThingStatus.DAMAGED){
            this._status = LoanStatus.RETURNED_DAMAGED
        } else{
            this._status = LoanStatus.RETURNED
        }
        if(this._dateReturned > this.dueDate){
            this._status = LoanStatus.OVERDUE
        }
        this.item.status = thingStatus
        return this
    }

    public get permanentLoan(): boolean{
        return this.dueDate == undefined
    }
}