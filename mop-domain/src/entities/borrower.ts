import {IBorrowCost} from "../valueItems/borrowCost";
import {PersonName} from "../valueItems/personName";
import {Person} from "./person";
import {EmailAddress} from "../valueItems/emailAddress";
import {Thing} from "./thing";
import {ThingStatus} from "../valueItems/thingStatus";
import {Loan} from "./loan";
import {
    InsufficentBorrowerVerificationFlag,
    InsufficientBorrowingCreditAvailableError,
    InvalidThingStatusToBorrow
} from "../valueItems/exceptions";
import {LoanStatus} from "../valueItems/loanStatus";
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";

export interface IBorrower {
    readonly id: string
    readonly amountAbleToBorrow: IBorrowCost;
    readonly verificationFlags: BorrowerVerificationFlags[];
}

export class Borrower extends Person implements IBorrower {
    public maxBorrowingAmount: IBorrowCost
    public readonly verificationFlags: BorrowerVerificationFlags[]
    private _amountAbleToBorrow: IBorrowCost

    constructor(id: string, name: PersonName, currentAmountToBorrow: IBorrowCost, maxBorrowingAmount: IBorrowCost,
                emails: EmailAddress[] = [], verificationFlags: BorrowerVerificationFlags[] = []) {
        super(id, name, emails)
        this._amountAbleToBorrow = currentAmountToBorrow
        this.maxBorrowingAmount = maxBorrowingAmount
        this.verificationFlags = verificationFlags
    }

    finishReturn(loan: Loan){
        if(loan.status !== LoanStatus.RETURNED){
            throw new Error("Only loans with a return_accepted status can be finished!")
        }

        this._amountAbleToBorrow = this._amountAbleToBorrow.add(loan.item.borrowingCost)
        if (this._amountAbleToBorrow.amount > this.maxBorrowingAmount.amount) {
            this._amountAbleToBorrow = this.maxBorrowingAmount.clone()
        }
    }

    return(loan: Loan): Loan {
        if(loan.lender) {
            loan.status = LoanStatus.RETURN_STARTED
        } else {
            loan.status = LoanStatus.RETURNED
            this.finishReturn(loan)
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