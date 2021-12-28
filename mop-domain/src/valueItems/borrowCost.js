"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericBorrowCost = void 0;
class NumericBorrowCost {
    _amount;
    constructor(amount) {
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    subtract(other) {
        const amount = this.amount - other.amount;
        return new NumericBorrowCost(amount);
    }
    add(other) {
        return new NumericBorrowCost(this.amount + other.amount);
    }
    clone() {
        return new NumericBorrowCost(this.amount);
    }
}
exports.NumericBorrowCost = NumericBorrowCost;
//# sourceMappingURL=borrowCost.js.map