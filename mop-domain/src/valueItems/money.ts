export class Money {
    public readonly amount: number

    constructor(amount: number) {
        this.amount = amount
    }

    static get None(): Money{
        return new Money(0)
    }
}