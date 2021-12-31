import {ILoan} from "../ILoan";
import {IEntity} from "../IEntity"
import {IThing} from "../IThing";

export interface ILender extends IEntity<ILender>{
    readonly id: string
    readonly items: Iterable<IThing>
    startReturn(loan: ILoan): ILoan
    finishReturn(loan: ILoan): ILoan
}