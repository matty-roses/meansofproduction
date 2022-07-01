import {IWaitingListFactory} from "./IWaitingListFactory";
import {Thing} from "../entities/things/thing";
import {IWaitingList} from "../entities/libraries/IWaitingList";
import {WaitingList} from "../entities/libraries/waitingList";

export class WaitingListFactory implements IWaitingListFactory{
    readonly supportsAuctions: boolean;

    constructor(supportsAuctions: boolean) {
        this.supportsAuctions = supportsAuctions
    }
    createList(item: Thing): IWaitingList {
        if (this.supportsAuctions){

        } else {
            return new WaitingList(item)
        }
    }
}