export class NumericBorrowCost {
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
//# sourceMappingURL=borrowCost.js.map