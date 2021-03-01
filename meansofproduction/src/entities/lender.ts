import {Loan} from "./loan";
import {Person} from "./person";
import {LoanStatus} from "../valueItems/loanStatus";

export interface ILender {
    acceptReturn(loan: Loan): Loan;
    markReturnAsDamaged(loan: Loan): Loan
}

export class IndividualLender extends Person implements ILender{
    acceptReturn(loan: Loan): Loan {
        return new Loan(
            loan.item,
            loan.borrower,
            loan.dueDate,
            LoanStatus.RETURNED,
            loan.returnLocation
        )
    }

    markReturnAsDamaged(loan: Loan): Loan {
        return new Loan(
            loan.item,
            loan.borrower,
            loan.dueDate,
            LoanStatus.RETURNED_DAMAGED,
            loan.returnLocation
        )
    }

}