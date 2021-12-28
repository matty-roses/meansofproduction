"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    static get None() {
        return new Money(0);
    }
}
exports.Money = Money;
//# sourceMappingURL=money.js.map