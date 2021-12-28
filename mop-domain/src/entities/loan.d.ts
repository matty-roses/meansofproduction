import { Thing } from "./thing";
import { LoanStatus } from "../valueItems/loanStatus";
import { Borrower } from "./borrower";
import { Location } from "../valueItems/location";
import { ILender } from "./lenders/ILender";
export interface ILoan {
    readonly item: Thing;
    readonly borrower: Borrower;
    readonly dueDate: Date;
    readonly returnLocation: Location;
}
export declare class Loan implements ILoan {
    readonly item: Thing;
    readonly borrower: Borrower;
    readonly dueDate: Date;
    private _active;
    private _status;
    readonly returnLocation: Location;
    constructor(item: Thing, borrower: Borrower, dueDate: Date, status?: LoanStatus, returnLocation?: Location | null);
    get lender(): ILender | null;
    get status(): LoanStatus;
    set status(status: LoanStatus);
    get active(): boolean;
    set active(val: boolean);
}
