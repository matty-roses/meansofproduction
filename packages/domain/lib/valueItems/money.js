export class Money {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    static get None() {
        return new Money(0);
    }
}
//# sourceMappingURL=money.js.map