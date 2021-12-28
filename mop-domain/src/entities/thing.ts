import {ThingStatus} from "../valueItems/thingStatus"
import {IBorrowCost} from "../valueItems/borrowCost";
import {Location} from "../valueItems/location";
import {Money} from "../valueItems/money"
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";
import {ILender} from "./lenders/ILender";

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

export class Thing implements IThing {
    readonly id: string
    readonly name: string
    readonly description: string
    readonly borrowingCost: IBorrowCost
    readonly storageLocation: Location
    readonly imageUrls: string[]
    private _status: ThingStatus = ThingStatus.READY
    readonly owner: ILender | null = null
    readonly insuredAmount: Money | null = null
    readonly requiredBorrowerFlags: BorrowerVerificationFlags[]

    constructor(
        id: string,
        name: string,
        cost: IBorrowCost,
        storageLocation: Location,
        currentStatus: ThingStatus = ThingStatus.READY,
        description: string = "",
        imageUrls: string[] = [],
        owner: ILender | null = null,
        insuredAmount: Money | null,
        requiredBorrowerFlags: BorrowerVerificationFlags[] = []
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.imageUrls = imageUrls
        this._status = currentStatus
        this.owner = owner
        this.borrowingCost = cost
        this.storageLocation = storageLocation
        this.insuredAmount = insuredAmount
        this.requiredBorrowerFlags = requiredBorrowerFlags
    }

    get status(): ThingStatus {
        return this._status
    }

    public set status(status: ThingStatus) {
        this._status = status
    }

}