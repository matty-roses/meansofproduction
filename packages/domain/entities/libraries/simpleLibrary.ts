import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {BaseLibrary} from "./baseLibrary"
import {ThingTitle} from "../../valueItems/thingTitle";
import {ThingStatus} from "../../valueItems/thingStatus";
import {Loan} from "../loans/loan";
import {LoanStatus} from "../../valueItems/loanStatus";
import {Location} from "../../valueItems/location";
import {ILender} from "../lenders/ILender";


// library which also lends items from a simple, single, location
export class SimpleLibrary extends BaseLibrary implements ILender{
    readonly items: Iterable<IThing>
    readonly location: Location

    constructor(name: string, location: Location, items: Iterable<IThing>, borrowers: Iterable<IBorrower>) {
        super(name, borrowers);
        this.items = items
        this.location = location
    }

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan {
        // check if avaialble
        if(item.status !== ThingStatus.READY){
            throw new Error();
        }

        // check if borrower in good standing
        if(!this.canBorrow(borrower)){
            throw new Error();
        }

        //make loan
        const loan = new Loan(
            this.makeLoanId(),
            item,
            borrower,
            until,
            LoanStatus.LOANED,
            this.location,
            undefined
        )

        return loan
    }

    canBorrow(borrower: IBorrower): boolean {
        return false;
    }

    return(loan: ILoan): ILoan {
        loan.startReturn()
        return loan
    }

    get allTitles(): Iterable<ThingTitle> {
        return this.getTitlesFromItems(this.items)
    }

    get id(): string{
        return this.name
    }

    finishReturn(loan: ILoan): ILoan {
        return loan;
    }

    startReturn(loan: ILoan): ILoan {
        return this.return(loan)
    }
}