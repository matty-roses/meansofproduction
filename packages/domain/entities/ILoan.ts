import {IBorrower} from "./people/IBorrower"
import {IThing} from "./IThing"
import {Location} from "../valueItems/location"


export interface ILoan {
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