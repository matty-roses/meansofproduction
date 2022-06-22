import {IWaitingList} from "../entities/libraries/IWaitingList";
import {IBorrower} from "../entities/people/IBorrower";
import {ThingTitle} from "../valueItems/thingTitle";

export class FirstComeFirstServeWaitingList implements IWaitingList{
    private readonly members: IBorrower[]
    readonly title: ThingTitle;

    constructor(title: ThingTitle){
        this.title = title
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