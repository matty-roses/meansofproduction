import {IMoney} from "../../valueItems/money/IMoney";
import {IBorrower} from "../people/IBorrower";
import {IAuctionBid} from "./IAuctionBid";

export class AuctionBid implements IAuctionBid{
    readonly amountBid: IMoney;
    readonly amountPaid: IMoney;
    readonly madeBy: IBorrower;
    readonly madeFor: IBorrower;

    constructor(amountBid: IMoney, amountPaid: IMoney, madeBy: IBorrower, madeFor: IBorrower) {
        this.amountBid = amountBid
        this.amountPaid= amountPaid
        this.madeBy = madeBy
        this.madeFor = madeFor
    }

}