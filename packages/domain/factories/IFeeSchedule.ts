import {ILoan} from "../entities/loans/ILoan";
import {IMoney} from "../valueItems/money/IMoney";

export interface IFeeSchedule{
    feesForOverdueItem(loan: ILoan): IMoney
    feesForDamagedItem(loan: ILoan): IMoney
}