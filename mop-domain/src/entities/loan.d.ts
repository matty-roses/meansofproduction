import { IThing } from "./thing";
import { LoanStatus } from "../valueItems/loanStatus";
import { IBorrower } from "./borrower";
import { Location } from "../valueItems/location";
import { ILender } from "./lenders/ILender";
export interface ILoan {
    readonly id: string;
    readonly item: IThing;
    readonly borrower: IBorrower;
    readonly dueDate: Date;
    readonly dateReturned: Date | undefined;
    readonly returnLocation: Location;
    readonly active: boolean;
    startReturn(): void;
    markItemDamaged(): void;
}
export declare class Loan implements ILoan {
    readonly id: string;
    readonly item: IThing;
    readonly borrower: IBorrower;
    readonly dueDate: Date;
    private _active;
    private _dateReturned;
    private _status;
    readonly returnLocation: Location;
    constructor(id: string, item: IThing, borrower: IBorrower, dueDate: Date, status?: LoanStatus, returnLocation?: Location | null, dateReturned?: Date);
    get lender(): ILender | null;
    get active(): boolean;
    set active(val: boolean);
    get dateReturned(): Date | undefined;
    get status(): LoanStatus;
    startReturn(): void;
    markItemDamaged(): void;
}
