import {ILoan} from "../ILoan";
import {IThing} from "../IThing"
import {IEntity} from "../IEntity"

export interface ILender extends IEntity {
    readonly items: Iterable<IThing>
    startReturn(loan: ILoan): ILoan
    finishReturn(loan: ILoan): ILoan
}