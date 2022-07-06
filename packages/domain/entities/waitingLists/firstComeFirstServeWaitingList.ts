import {IWaitingList} from "./IWaitingList";
import {IBorrower} from "../people/IBorrower";
import {IThing} from "../things/IThing";

export class FirstComeFirstServeWaitingList implements IWaitingList{
    private readonly members: IBorrower[]
    readonly item: IThing;

    constructor(item: IThing){
        this.item = item
        this.members = []
    }

    add(borrower: IBorrower): IWaitingList {
        this.members.push(borrower)
        return this
    }

    isOnList(borrower: IBorrower): boolean {
        return borrower in this.members
    }

    next(): IBorrower {
        return this.members[0]
    }

    remove(borrower: IBorrower): void {
        this.members.forEach((element,index)=>{
            if(element.id==borrower.id) this.members.splice(index,1);
        });
    }
}