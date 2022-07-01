export interface IMoney {
    equals(other: IMoney): boolean
    greaterThan(other: IMoney): boolean
    lessThan(other: IMoney): boolean
    add(other: IMoney): IMoney

    readonly amount: number
    readonly currencyName: string
}