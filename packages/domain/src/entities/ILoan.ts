import {IBorrower} from "./IBorrower";
import {IEntity} from "./IEntity"
import {IThing} from "./IThing";
import {Location} from "../valueItems/location";

export interface ILoan extends IEntity<ILoan> {
    readonly id: string
    readonly item: IThing
    readonly borrower: IBorrower
    readonly dueDate: Date
    readonly dateReturned: Date | undefined
    readonly returnLocation: Location
    readonly active: boolean

    startReturn(): void

    markItemDamaged(): void
}