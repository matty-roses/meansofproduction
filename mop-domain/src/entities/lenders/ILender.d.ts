import { Loan } from "../loan";
import { IThing } from "../thing";
export interface ILender {
    readonly id: string;
    readonly items: Iterable<IThing>;
    acceptReturn(loan: Loan): Loan;
    markReturnAsDamaged(loan: Loan): Loan;
}
