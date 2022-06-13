import {IBorrower} from "../people/IBorrower";
import {IThing} from "../IThing";
import {ILoan} from "../ILoan";

export interface ILibrary {
    readonly name: string
    readonly availableItems: Iterable<IThing>
    readonly allItems: Iterable<IThing>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    return(loan: ILoan): ILoan
}