import {Money} from "../../valueItems/money";
import {IBorrower} from "../borrower";
import {IThing} from "../thing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {ILoan, Loan} from "../loan";
import {ILibrary} from "./ILibrary";
import {LoanStatus} from "../../valueItems/loanStatus";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";

export class DistributedLibrary implements ILibrary {
    private readonly _name: string
    public readonly maxFees: Money
    private readonly _borrowers: IBorrower[]
    private readonly _userIDsAndFees: Record<string, Money>
    private readonly _lenders: IndividualDistributedLender[]

    constructor(name: string, maxFees: Money, lenders: IndividualDistributedLender[], borrowers: IBorrower[]) {
        this._name = name
        this.maxFees = maxFees

        this._userIDsAndFees = {}
        this._lenders = lenders
        this._borrowers = borrowers
    }

    public get name(): string {
        return this._name
    }

    public get chargesFees(): boolean {
        return true
    }

    public canBorrow(borrower: IBorrower): boolean {
        const ids = this._borrowers.map(b => b.id)
        if (!(borrower.id in ids)) {
            return false
        }
        return true
    }

    get allItems(): Iterable<IThing> {
        const res = []
        for (const lender of this._lenders) {
            for (const item of lender.items) {
                res.push(item)
            }
        }
        return res
    }

    get availableItems(): Iterable<IThing> {
        const res = []
        for (const item of this.allItems) {
            if (item.status === ThingStatus.READY) {
                res.push(item)
            }
        }
        return res
    }

    private getOwnerOfItem(item: IThing): IndividualDistributedLender{
        return null
    }

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan {
        // get the lender for this item
        const lender = this.getOwnerOfItem(item)

        return new Loan(
            item,
            borrower,
            until,
            LoanStatus.LOANED,
            lender.preferredReturnLocation(item)
        )
    }

    return(loan: ILoan): ILoan {
        // ping out to the borrower to start the return process
        loan.startReturn()

        return loan
    }
}