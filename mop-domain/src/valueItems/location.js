"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
class Location {
    latitude;
    longitude;
    address;
    constructor(latitude, longitude, address = null) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }
}
exports.Location = Location;
//# sourceMappingURL=location.js.map