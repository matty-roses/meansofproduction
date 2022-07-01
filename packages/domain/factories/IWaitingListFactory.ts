import {IWaitingList} from "../entities/libraries/IWaitingList";
import {IThing} from "../entities/things/IThing";


export interface IWaitingListFactory{
    readonly supportsAuctions: boolean
    createList(item: IThing): IWaitingList
}