import { Loan } from "../loan";
import { ILender } from "./ILender";
import { ILibrary } from "../library";
export declare class ExternalLibrary implements ILender, ILibrary {
    acceptReturn(loan: Loan): Loan;
    markReturnAsDamaged(loan: Loan): Loan;
}
