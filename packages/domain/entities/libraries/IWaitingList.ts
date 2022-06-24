import {IBorrower} from "../people/IBorrower";
import {IMoney} from "../../valueItems/money/IMoney";
import {IThing} from "../things/IThing";


export interface IWaitingList{
    item: IThing;
    next() : IBorrower;
    add(borrower: IBorrower): IWaitingList
    isOnList(borrower: IBorrower): boolean
    remove(borrower: IBorrower): void
}

export interface IAuctionBid{
    readonly madeBy: IBorrower;
    readonly madeFor: IBorrower;
    readonly amount: IMoney;
}

export interface IAuctionableWaitingList extends IWaitingList{
    readonly started: Date;
    readonly ends: Date;
    readonly isActive: boolean;

    getWinningBorrower(): [IBorrower, IMoney];
    getBids(): Iterable<IAuctionBid>;
    addBid(bid: IAuctionBid): void;
}