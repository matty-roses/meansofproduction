import {IBorrower} from "../people/IBorrower";
import {IMoney} from "../../valueItems/money/IMoney";
import {IWaitingList} from "./IWaitingList";
import {IAuctionBid} from "./IAuctionBid";

export interface IAuctionableWaitingList extends IWaitingList {
    readonly started: Date;
    readonly ends: Date;
    readonly isActive: boolean;

    getWinningBorrower(): [IBorrower, IMoney];

    getBids(): Iterable<IAuctionBid>;

    addBid(bid: IAuctionBid): void;
}