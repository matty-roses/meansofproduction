import {Loan} from "../loan";
import {ILender} from "./ILender";

export class ExternalLibraryLender implements ILender{
    acceptReturn(loan: Loan): Loan {
        return undefined;
    }

    markReturnAsDamaged(loan: Loan): Loan {
        return undefined;
    }

}