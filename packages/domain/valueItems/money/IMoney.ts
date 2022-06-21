export interface IMoney {
    equals(other: IMoney): boolean
    greaterThan(other: IMoney): boolean
    lessThan(other: IMoney): boolean

    readonly amount: number
    readonly currencyName: string
}