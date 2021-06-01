import {Loan} from "../loan";

export interface ILender {
    readonly id: string
    acceptReturn(loan: Loan): Loan;

    markReturnAsDamaged(loan: Loan): Loan
}