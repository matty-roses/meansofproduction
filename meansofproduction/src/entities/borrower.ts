import {IBorrowCost} from "../valueItems/borrowCost";
import {PersonName} from "../valueItems/personName";
import {Person} from "./person";
import {Email} from "../valueItems/email";
import {Thing} from "./thing";
import {ThingStatus} from "../valueItems/thingStatus";
import {Loan} from "./loan";
import {
    InsufficientBorrowingCreditAvailableError, InvalidThingStatusToBorrow, InsufficentBorrowerVerificationFlag
} from "../valueItems/exceptions";
import {LoanStatus} from "../valueItems/loanStatus";
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";

export interface IBorrower {
    readonly amountAbleToBorrow: IBorrowCost;
    readonly verificationFlags: BorrowerVerificationFlags[]

    borrow(item: Thing, until: Date): Loan;
    return(loan: Loan): Loan;
}

export class Borrower extends Person implements IBorrower {
    public maxBorrowingAmount: IBorrowCost
    public readonly verificationFlags: BorrowerVerificationFlags[]
    private _amountAbleToBorrow: IBorrowCost

    constructor(id: string, name: PersonName, currentAmountToBorrow: IBorrowCost, maxBorrowingAmount: IBorrowCost,
                emails: Email[] = [], verificationFlags: BorrowerVerificationFlags[] = []) {
        super(id, name, emails)
        this._amountAbleToBorrow = currentAmountToBorrow
        this.maxBorrowingAmount = maxBorrowingAmount
        this.verificationFlags = verificationFlags
    }

    return(loan: Loan, damaged: boolean = false): Loan {
        loan.status = damaged ? LoanStatus.RETURNED_DAMAGED : LoanStatus.RETURNED

        this._amountAbleToBorrow = this._amountAbleToBorrow.add(loan.item.borrowingCost)
        if(this._amountAbleToBorrow.amount > this.maxBorrowingAmount.amount){
            this._amountAbleToBorrow = this.maxBorrowingAmount.clone()
        }
        return loan
    }

    get amountAbleToBorrow(): IBorrowCost {
        return this._amountAbleToBorrow
    }

    borrow(item: Thing, until: Date): Loan {
        // do we have all the borrower verification required?
        for(const flag of item.requiredBorrowerFlags) {
            if(this.verificationFlags.indexOf(flag) < 0){
                throw new InsufficentBorrowerVerificationFlag(flag)
            }
        }

        // do we have enough credit to do so?
        if (this.amountAbleToBorrow.amount < item.borrowingCost.amount) {
            throw new InsufficientBorrowingCreditAvailableError(this.amountAbleToBorrow.amount, item.borrowingCost.amount)
        }

        // is the object available?
        if(item.status !== ThingStatus.READY){
            throw new InvalidThingStatusToBorrow(item.status)
        }

        // we're good to borrow!

        // subtract the cost from what this person has available
        this._amountAbleToBorrow = this._amountAbleToBorrow.subtract(item.borrowingCost)

        // change the item status
        item.status = ThingStatus.CURRENTLY_BORROWED

        // return the loan
        // make the loan
        return new Loan(item, this, until)
    }
}