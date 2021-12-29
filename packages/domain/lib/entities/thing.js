import { ThingStatus } from "../valueItems/thingStatus";
import { NoCost } from "../valueItems/noCost";
export class Thing {
    id;
    name;
    description;
    borrowingCost = new NoCost();
    storageLocation;
    imageUrls;
    _status = ThingStatus.READY;
    owner = null;
    insuredAmount = null;
    requiredBorrowerFlags;
    constructor(id, name, storageLocation, cost, currentStatus = ThingStatus.READY, description = "", imageUrls = [], owner = null, insuredAmount, requiredBorrowerFlags = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrls = imageUrls;
        this._status = currentStatus;
        this.owner = owner;
        this.borrowingCost = cost;
        this.storageLocation = storageLocation;
        this.insuredAmount = insuredAmount;
        this.requiredBorrowerFlags = requiredBorrowerFlags;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
//# sourceMappingURL=thing.js.map