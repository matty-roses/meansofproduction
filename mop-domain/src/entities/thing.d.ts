import { ThingStatus } from "../valueItems/thingStatus";
import { IBorrowCost } from "../valueItems/borrowCost";
import { Location } from "../valueItems/location";
import { Money } from "../valueItems/money";
import { BorrowerVerificationFlags } from "../valueItems/borrowerVerificationFlags";
import { ILender } from "./lenders/ILender";
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
export declare class Thing implements IThing {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly borrowingCost: IBorrowCost;
    readonly storageLocation: Location;
    readonly imageUrls: string[];
    private _status;
    readonly owner: ILender | null;
    readonly insuredAmount: Money | null;
    readonly requiredBorrowerFlags: BorrowerVerificationFlags[];
    constructor(id: string, name: string, storageLocation: Location, cost: IBorrowCost, currentStatus: ThingStatus | undefined, description: string | undefined, imageUrls: string[] | undefined, owner: ILender | null | undefined, insuredAmount: Money | null, requiredBorrowerFlags?: BorrowerVerificationFlags[]);
    get status(): ThingStatus;
    set status(status: ThingStatus);
}
//# sourceMappingURL=thing.d.ts.map