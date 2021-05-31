import {Loan} from "../loan";
import {ILender} from "./ILender";
import {ILibrary} from "../library";

export class ExternalLibraryLender implements ILender, ILibrary{
    acceptReturn(loan: Loan): Loan {
        return undefined;
    }

    markReturnAsDamaged(loan: Loan): Loan {
        return undefined;
    }

}