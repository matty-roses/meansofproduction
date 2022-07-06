import {IBorrower} from "../people/IBorrower";
import {IMoney} from "../../valueItems/money/IMoney";

export interface IAuctionBid {
    readonly madeBy: IBorrower;
    readonly madeFor: IBorrower;
    //paid and bid amounts can differ, to enable quadratic bidding
    readonly amountPaid: IMoney;
    readonly amountBid: IMoney;
}