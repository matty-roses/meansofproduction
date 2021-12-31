import {IBorrower} from "./IBorrower"
import {IThing} from "./IThing"
import {Location} from "../valueItems/location"
import {IEntity} from "./IEntity"


export interface ILoan extends IEntity{
    readonly item: IThing
    readonly borrower: IBorrower
    readonly dueDate: Date
    readonly dateReturned: Date | undefined
    readonly returnLocation: Location
    readonly active: boolean

    startReturn(): void

    markItemDamaged(): void
}