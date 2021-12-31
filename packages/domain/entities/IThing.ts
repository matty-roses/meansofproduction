import {IBorrowCost} from "../valueItems/borrowCost"
import {ILender} from "./lenders/ILender"
import {Money} from "../valueItems/money"
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags"
import {ThingStatus} from "../valueItems/thingStatus"
import {Location} from "../valueItems/location"


export interface IThing {
    id: string;
    name: string;
    description: string;
    borrowingCost: IBorrowCost;
    storageLocation: Location;
    imageUrls: string[];
    owner: ILender | null;
    insuredAmount: Money | null;
    requiredBorrowerFlags: BorrowerVerificationFlags[];
    status: ThingStatus;
}