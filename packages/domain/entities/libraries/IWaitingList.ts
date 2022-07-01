import {IBorrower} from "../people/IBorrower";
import {IThing} from "../things/IThing";


export interface IWaitingList{
    item: IThing;
    pop() : IBorrower | null;
    add(borrower: IBorrower): IWaitingList
    isOnList(borrower: IBorrower): boolean
}

