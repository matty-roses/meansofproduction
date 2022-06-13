import {IMoney} from "../../valueItems/money/IMoney";
import {ILoan} from "../ILoan";

export interface ILibraryFee {
    readonly isCurrent: boolean
    chargedFor: ILoan
    amount: IMoney
}