import { ILoan } from "../loan";
import { IThing } from "../thing";
export interface ILender {
    readonly id: string;
    readonly items: Iterable<IThing>;
    startReturn(loan: ILoan): ILoan;
    finishReturn(loan: ILoan): ILoan;
}
