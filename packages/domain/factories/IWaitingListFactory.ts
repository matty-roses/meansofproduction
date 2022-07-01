import {IWaitingList} from "../entities/libraries/IWaitingList";
import {Thing} from "../entities/things/thing";


export interface IWaitingListFactory{
    readonly supportsAuctions: boolean
    createList(item: Thing): IWaitingList
}