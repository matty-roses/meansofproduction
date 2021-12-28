import { IBorrower } from "./borrower";
import { Money } from "../valueItems/money";
import { IThing } from "./thing";
import { IThingRepository } from "../repositories/thingRepository";
import { ILender } from "./lenders/ILender";
import { Loan } from "./loan";
export interface ILibrary {
    readonly name: string;
    readonly chargesFees: boolean;
    readonly borrowers: Iterable<IBorrower>;
    readonly availableItems: Iterable<IThing>;
    readonly allItems: Iterable<IThing>;
    canBorrow(borrower: IBorrower): boolean;
    getFeesOwned(borrower: IBorrower): Money;
    getPoints(borrower: IBorrower): number;
    borrow(item: IThing, until: Date): Loan;
    return(loan: Loan): Loan;
}
export declare class DistributedLibraryWithFees implements ILibrary {
    private readonly _name;
    readonly maxFees: Money;
    private readonly _borrowers;
    private readonly _userIDsAndFees;
    private readonly _lenders;
    private readonly _thingRepository;
    constructor(name: string, maxFees: Money, lenders: ILender[], borrowers: IBorrower[], thingRepository: IThingRepository);
    get name(): string;
    get chargesFees(): boolean;
    canBorrow(borrower: IBorrower): boolean;
    getFeesOwned(borrower: IBorrower): Money;
    get allItems(): Iterable<IThing>;
    get availableItems(): void;
    readonly availableItems: Iterable;
    readonly borrowers: Iterable<IBorrower>;
    borrow(item: any, until: Date): Loan;
    getPoints(borrower: IBorrower): number;
    return(loan: Loan): Loan;
}
