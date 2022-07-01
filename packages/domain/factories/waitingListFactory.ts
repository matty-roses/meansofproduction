import {IWaitingListFactory} from "./IWaitingListFactory";
import {Thing} from "../entities/things/thing";
import {IWaitingList} from "../entities/libraries/IWaitingList";
import {WaitingList} from "../entities/libraries/waitingList";

export class WaitingListFactory implements IWaitingListFactory{
    readonly supportsAuctions: boolean;

    constructor(supportsAuctions: boolean = false) {
        this.supportsAuctions = supportsAuctions
    }
    createList(item: Thing): IWaitingList {
        if (this.supportsAuctions){
            throw new Error()
        } else {
            return new WaitingList(item)
        }
    }
}