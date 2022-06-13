import {IBorrowCost} from "../../valueItems/borrowCost"
import {ILender} from "../lenders/ILender"
import {IMoney} from "../../valueItems/money/IMoney"
import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags"
import {ThingStatus} from "../../valueItems/thingStatus"
import {ThingTitle} from "../../valueItems/thingTitle";
import {Location} from "../../valueItems/location"


export interface IThing {
    id: string;
    title: ThingTitle;
    description: string;
    borrowingCost: IBorrowCost;
    storageLocation: Location;
    imageUrls: string[];
    owner: ILender | null;
    insuredAmount: IMoney | null;
    requiredBorrowerFlags: BorrowerVerificationFlags[];
    status: ThingStatus;
}