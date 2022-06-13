import {ILoan} from "../loans/ILoan";
import {IThing} from "../IThing"

export interface ILender {
    readonly id: string
    readonly items: Iterable<IThing>
    startReturn(loan: ILoan): ILoan
    finishReturn(loan: ILoan): ILoan
}