import {IWaitingList} from "./IWaitingList";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";

export class WaitingList implements IWaitingList {
    item: IThing;

    private readonly queue: IBorrower[]

    constructor(item: IThing) {
        this.item = item;
        this.queue = []
    }

    add(borrower: IBorrower): IWaitingList {
        this.queue.push(borrower)
        return this
    }

    isOnList(borrower: IBorrower): boolean {
        const ids = this.queue.map(i => i.id)
        return borrower.id in ids
    }

    pop(): IBorrower | null {
        if(this.queue.length < 1){
            return null
        }

        const item = this.queue.shift()
        if(!item){
            return null
        }
        return item
    }
}