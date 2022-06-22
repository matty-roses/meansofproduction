import {IWaitingList} from "../entities/libraries/IWaitingList";
import {IBorrower} from "../entities/people/IBorrower";
import {ThingTitle} from "../valueItems/thingTitle";


export interface IWaitingListFactory{
    readonly supportsAuctions: boolean
    createList(title: ThingTitle): IWaitingList
}