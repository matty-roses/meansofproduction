import {ThingStatus} from "../../valueItems/thingStatus"
import {IBorrowCost} from "../../valueItems/borrowCost";
import {Location} from "../../valueItems/location";
import {IMoney} from "../../valueItems/money/IMoney"
import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags";
import {ILender} from "../lenders/ILender";
import {NoCost} from "../../valueItems/noCost";
import {IThing} from "./IThing"
import {ThingTitle} from "../../valueItems/thingTitle";


export class Thing implements IThing {
    readonly id: string
    readonly description: string
    readonly storageLocation: Location
    readonly imageUrls: string[]
    private _status: ThingStatus = ThingStatus.READY
    readonly owner: ILender
    readonly purchaseCost: IMoney | null = null
    readonly requiredBorrowerFlags: BorrowerVerificationFlags[]

    title: ThingTitle;

    constructor(
        id: string,
        title: ThingTitle,
        storageLocation: Location,
        owner: ILender,
        currentStatus: ThingStatus = ThingStatus.READY,
        description: string = "",
        imageUrls: string[] = [],
        purchaseCost: IMoney | null,
        requiredBorrowerFlags: BorrowerVerificationFlags[] = []
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.imageUrls = imageUrls
        this._status = currentStatus
        this.owner = owner
        this.storageLocation = storageLocation
        this.purchaseCost = purchaseCost
        this.requiredBorrowerFlags = requiredBorrowerFlags
    }

    public get status(): ThingStatus {
        return this._status
    }

    public set status(status: ThingStatus) {
        this._status = status
    }
}