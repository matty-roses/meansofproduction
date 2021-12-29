export class NoCost {
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
//# sourceMappingURL=noCost.js.map