import {IBorrower} from "../borrower";
import {IThing} from "../thing";
import {ILoan} from "../loan";

export interface ILibrary {
    readonly name: string
    readonly availableItems: Iterable<IThing>
    readonly allItems: Iterable<IThing>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    return(loan: ILoan): ILoan
}