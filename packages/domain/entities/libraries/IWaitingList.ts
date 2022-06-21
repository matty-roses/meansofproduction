import {IBorrower} from "../people/IBorrower";
import {IMoney} from "../../valueItems/money/IMoney";


export interface IWaitingList{
    next() : IBorrower;
    isOnList(borrower: IBorrower): boolean;
    remove(borrower: IBorrower): void;
}

export interface IAuctionBid{
    readonly bidder: IBorrower;
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