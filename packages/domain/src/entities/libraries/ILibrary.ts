import {IBorrower} from "../IBorrower";
import {ILoan} from "../ILoan";
import {IEntity} from "../IEntity"
import {IThing} from "../IThing";

export interface ILibrary extends IEntity<ILibrary> {
    readonly name: string
    readonly availableItems: Iterable<IThing>
    readonly allItems: Iterable<IThing>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    return(loan: ILoan): ILoan
}