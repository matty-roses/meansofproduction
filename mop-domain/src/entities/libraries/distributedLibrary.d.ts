import { Money } from "../../valueItems/money";
import { IBorrower } from "../borrower";
import { IThing } from "../thing";
import { ILoan } from "../loan";
import { ILibrary } from "./ILibrary";
import { IndividualDistributedLender } from "../lenders/individualDistributedLender";
export declare class DistributedLibrary implements ILibrary {
    private readonly _name;
    readonly maxFees: Money;
    private readonly _borrowers;
    private readonly _userIDsAndFees;
    private readonly _lenders;
    constructor(name: string, maxFees: Money, lenders: IndividualDistributedLender[], borrowers: IBorrower[]);
    get name(): string;
    get chargesFees(): boolean;
    canBorrow(borrower: IBorrower): boolean;
    get allItems(): Iterable<IThing>;
    get availableItems(): Iterable<IThing>;
    private getOwnerOfItem;
    private makeLoanId;
    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan;
    return(loan: ILoan): ILoan;
}
//# sourceMappingURL=distributedLibrary.d.ts.map