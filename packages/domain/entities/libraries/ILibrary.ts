import {IBorrower} from "../people/IBorrower";
import {IThing} from "../things/IThing";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";
import {IWaitingList} from "../waitingLists/IWaitingList";
import {Person} from "../people/person";

export interface ILibrary {
    readonly name: string
    readonly allTitles: Iterable<ThingTitle>
    readonly borrowers: Iterable<IBorrower>
    readonly administrator: Person
    readonly availableTitles: Iterable<ThingTitle>

    canBorrow(borrower: IBorrower): boolean

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    startReturn(loan: ILoan): ILoan
    finishReturn(loan: ILoan): ILoan

    markAsDamaged(item: IThing): IThing

    // reserve the next available item
    reserveItem(item: IThing, borrower: IBorrower): IWaitingList
}