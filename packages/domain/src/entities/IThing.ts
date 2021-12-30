import {IBorrowCost} from "../valueItems/borrowCost";
import {Location} from "../valueItems/location";
import {ILender} from "./lenders/ILender";
import {Money} from "../valueItems/money";
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";
import {ThingStatus} from "../valueItems/thingStatus";
import {IEntity} from "./IEntity";

export interface IThing extends IEntity<IThing>{
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