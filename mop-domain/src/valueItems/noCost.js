"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoCost = void 0;
class NoCost {
    get amount() {
        return 0;
    }
    subtract(other) {
        throw new Error("NoCost cannot subtract");
    }
    add(other) {
        throw new Error("NoCost cannot add");
    }
    clone() {
        return new NoCost();
    }
}
exports.NoCost = NoCost;
//# sourceMappingURL=noCost.js.map