import {IBorrower} from "../people/IBorrower"
import {IThing} from "../things/IThing"
import {Location} from "../../valueItems/location"
import {ThingStatus} from "../../valueItems/thingStatus";
import {LoanStatus} from "../../valueItems/loanStatus";


export interface ILoan {
    readonly id: string
    readonly item: IThing
    readonly borrower: IBorrower
    readonly dueDate?: Date
    readonly dateReturned: Date | undefined
    readonly returnLocation: Location
    readonly active: boolean
    readonly status: LoanStatus
    readonly permanentLoan: boolean

    startReturn(): ILoan
    finishReturn(thingStatus: ThingStatus): ILoan
}