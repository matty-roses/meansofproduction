import { ThingStatus } from "../valueItems/thingStatus";
import { NoCost } from "../valueItems/noCost";
export class Thing {
    constructor(id, name, storageLocation, cost, currentStatus = ThingStatus.READY, description = "", imageUrls = [], owner = null, insuredAmount, requiredBorrowerFlags = []) {
        this.borrowingCost = new NoCost();
        this._status = ThingStatus.READY;
        this.owner = null;
        this.insuredAmount = null;
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