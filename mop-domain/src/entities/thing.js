"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thing = void 0;
const thingStatus_1 = require("../valueItems/thingStatus");
class Thing {
    id;
    name;
    description;
    borrowingCost;
    storageLocation;
    imageUrls;
    _status = thingStatus_1.ThingStatus.READY;
    owner = null;
    insuredAmount = null;
    requiredBorrowerFlags;
    constructor(id, name, cost, storageLocation, currentStatus = thingStatus_1.ThingStatus.READY, description = "", imageUrls = [], owner = null, insuredAmount, requiredBorrowerFlags = []) {
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
exports.Thing = Thing;
//# sourceMappingURL=thing.js.map