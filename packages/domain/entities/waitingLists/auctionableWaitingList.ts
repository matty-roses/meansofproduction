import {IAuctionableWaitingList} from "./IAuctionableWaitingList";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {IWaitingList} from "./IWaitingList";
import {IMoney} from "../../valueItems/money/IMoney";
import {IAuctionBid} from "./IAuctionBid";
import {WaitingList} from "./waitingList";

export class AuctionableWaitingList implements IAuctionableWaitingList{
    readonly ends: Date;
    readonly isActive: boolean;
    item: IThing;
    readonly started: Date;
    readonly moneyFactory: MoneyFactory

    private readonly mainList: IWaitingList
    private readonly bidsByForId: Map<string, IAuctionBid[]>

    constructor(item: IThing, ends: Date, moneyFactory: MoneyFactory, isActive: boolean = true, started: Date = undefined) {
        this.mainList = new WaitingList(item)
        this.bidsByForId = new Map<string, IAuctionBid[]>()
        this.moneyFactory = moneyFactory
    }


    add(borrower: IBorrower): IWaitingList {
        this.mainList.add(borrower)
        return this
    }

    addBid(bid: IAuctionBid): void {
        if(!bid.madeFor.id in this.bidsByForId){
            this.bidsByForId[bid.madeFor.id] = []
        }
        const bids = this.bidsByForId[bid.madeFor.id]
        bids.push(bid)
    }

    getBids(): Iterable<IAuctionBid> {
        const res = []
        for(const id in this.bidsByForId){
            for(const bid of this.bidsByForId.get(id)){
                res.push(bid)
            }
        }

        return res
    }

    getWinningBorrower(): [IBorrower, IMoney] {
        let topBorrowerId: string;
        let topAmount: IMoney = this.moneyFactory.getEmptyMoney()

        for (const id in this.bidsByForId){
            let amount = this.moneyFactory.getEmptyMoney()
            const bids = this.bidsByForId.get(id)
            for (const bid of bids){
                amount.add(bid.amountBid)
            }

            if(amount.greaterThan(topAmount)){
                topAmount = amount
                topBorrowerId = id
            }
        }

        return [undefined, undefined];
    }

    isOnList(borrower: IBorrower): boolean {
        return false;
    }

    pop(): IBorrower | null {
        if(!topAmount.greaterThan(this.moneyFactory.getEmptyMoney())){
            // no bids, give them the list first person
        }
    }

}