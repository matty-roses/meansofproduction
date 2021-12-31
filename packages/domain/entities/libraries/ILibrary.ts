import {IBorrower} from "../IBorrower";
import {IThing} from "../IThing";
import {ILoan} from "../ILoan";
import {IEntity} from "../IEntity"

export interface ILibrary extends IEntity {
    readonly name: string
    readonly availableItems: Iterable<IThing>
    readonly allItems: Iterable<IThing>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    return(loan: ILoan): ILoan
}