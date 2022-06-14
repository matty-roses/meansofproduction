import {IMoney} from "../../valueItems/money/IMoney";
import {IBorrower} from "../people/IBorrower";
import {IThing} from "../things/IThing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {ILoan} from "../loans/ILoan";
import {Loan} from "../loans/loan"
import {LoanStatus} from "../../valueItems/loanStatus";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {InvalidThingStatusToBorrow} from "../../valueItems/exceptions";
import {ThingTitle} from "../../valueItems/thingTitle";
import {BaseLibrary} from "./baseLibrary";

export class DistributedLibrary extends BaseLibrary{
    public readonly maxFees: IMoney
    private readonly _lenders: IndividualDistributedLender[]

    constructor(name: string, maxFees: IMoney, lenders: IndividualDistributedLender[]) {
        super(name, [])
        this.maxFees = maxFees

        this._lenders = lenders
    }

    public canBorrow(borrower: IBorrower): boolean {
        for(const b of this.borrowers){
            if(b.id === borrower.id){
                // in the lib, for now that's enough
                return true
            }
        }
        return false
    }

    get allTitles(): Iterable<ThingTitle> {
        const items = []
        for (const lender of this._lenders) {
            for (const item of lender.items) {
                items.push(item)
            }
        }

        return this.getTitlesFromItems(items)

    }

    private getOwnerOfItem(item: IThing): IndividualDistributedLender| null {
        for (const lender of this._lenders){
            for (const lenderItem of lender.items){
                if (item.id === lenderItem.id){
                    return lender
                }
            }
        }
        return null
    }

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan {
        if (item.status === ThingStatus.DAMAGED) {
            throw new InvalidThingStatusToBorrow(item.status)
        }
        // get the lender for this item
        const lender = this.getOwnerOfItem(item)
        if (!lender){
            throw new Error(`Cannot find owner of item ${item.id}`)
        }
        return new Loan(
            this.makeLoanId(),
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