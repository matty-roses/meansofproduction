import {IBorrower} from "../people/IBorrower";
import {IThing} from "../things/IThing";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";

export interface ILibrary {
    readonly name: string
    readonly allTitles: Iterable<ThingTitle>
    readonly borrowers: Iterable<IBorrower>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    return(loan: ILoan): ILoan
}