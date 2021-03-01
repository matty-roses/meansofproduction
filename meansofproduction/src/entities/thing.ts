import {ThingStatus} from "../valueItems/thingStatus"
import {Person} from "./person"
import {IBorrowCost} from "../valueItems/borrowCost";
import {Location} from "../valueItems/location";
import {Money} from "../valueItems/money"
import {BorrowerVerificationFlags} from "../valueItems/borrowerVerificationFlags";

export class Thing {
    public readonly id: string
    public readonly name: string
    public readonly description: string
    public readonly borrowingCost: IBorrowCost
    public readonly storageLocation: Location
    public readonly imageUrls: string[]
    private _status: ThingStatus = ThingStatus.READY
    public readonly owner: Person | null = null
    public readonly insuredAmount: Money | null = null
    public readonly requiredBorrowerFlags: BorrowerVerificationFlags[]

    constructor(
        id: string,
        name: string,
        cost: IBorrowCost,
        storageLocation: Location,
        currentStatus: ThingStatus = ThingStatus.READY,
        description: string = "",
        imageUrls: string[] = [],
        owner: Person | null = null,
        insuredAmount: Money | null,
        requiredBorrowerFlags: BorrowerVerificationFlags[]
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

    public get status(): ThingStatus {
        return this._status
    }

    public set status(status: ThingStatus) {
        this._status = status
    }
}