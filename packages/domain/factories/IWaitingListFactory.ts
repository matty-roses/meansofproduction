import {IWaitingList} from "../entities/waitingLists/IWaitingList";
import {IThing} from "../entities/things/IThing";


export interface IWaitingListFactory{
    readonly supportsAuctions: boolean
    createList(item: IThing): IWaitingList
}