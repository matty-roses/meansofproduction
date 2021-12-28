import { Loan } from "../loan";
import { Person } from "../person";
import { ILender } from "./ILender";
export declare class IndividualLender extends Person implements ILender {
    acceptReturn(loan: Loan): Loan;
    markReturnAsDamaged(loan: Loan): Loan;
}
