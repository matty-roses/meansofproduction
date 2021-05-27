import {Loan} from "../loan";

export interface ILender {
    acceptReturn(loan: Loan): Loan;

    markReturnAsDamaged(loan: Loan): Loan
}