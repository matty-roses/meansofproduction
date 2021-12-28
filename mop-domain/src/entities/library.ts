import {IBorrower} from "./borrower";
import {Money} from "../valueItems/money";
import {IThing} from "./thing";
import {IThingRepository} from "../repositories/thingRepository";
import {ILender} from "./lenders/ILender";
import {ThingStatus} from "../valueItems/thingStatus";
import {ILoan, Loan} from "./loan";

export interface ILibrary{
    readonly name: string
    readonly chargesFees: boolean
    readonly borrowers: Iterable<IBorrower>
    readonly availableItems: Iterable<IThing>
    readonly allItems: Iterable<IThing>
    canBorrow(borrower: IBorrower): boolean
    getFeesOwned(borrower: IBorrower): Money
    getPoints(borrower: IBorrower): number
    borrow(item: IThing, borrower: IBorrower, until: Date): Loan
    return(loan: Loan): Loan
}

export class DistributedLibraryWithFees implements ILibrary{
    private readonly _name: string
    public readonly maxFees: Money
    private readonly _borrowers: IBorrower[]
    private readonly _userIDsAndFees: Record<string, Money>
    private readonly _lenders: ILender[]
    private readonly _thingRepository: IThingRepository;

    constructor(name: string, maxFees: Money, lenders: ILender[], borrowers: IBorrower[], thingRepository: IThingRepository) {
        this._name = name
        this.maxFees = maxFees
        this._userIDsAndFees = {}

        this._lenders = lenders
        this._thingRepository = thingRepository
        this._borrowers = borrowers
    }

    public get name(): string{
        return this._name
    }

    public get chargesFees(): boolean{
        return true
    }

    public canBorrow(borrower: IBorrower): boolean {
        const ids = this._borrowers.map(b => b.id)
        if(!(borrower.id in ids)){
            return false
        }
        if (borrower.id in this._userIDsAndFees){
            const amountInFees = this._userIDsAndFees[borrower.id]
            return amountInFees.amount <= this.maxFees.amount
        }
        return true
    }

    getFeesOwned(borrower: IBorrower): Money {
        if(!(borrower.id in this._userIDsAndFees)){
            return Money.None
        }
        return this._userIDsAndFees[borrower.id]
    }

    get allItems(): Iterable<IThing> {
        for (const lender of this._lenders){
            for (const item of lender.items){
                yield item
            }
        }
    }

    get availableItems(): Iterable<IThing> {
        for (const item of this.allItems){
            if (item.status == ThingStatus.READY){
                yield item
            }
        }
    }
    readonly availableItems: Iterable<>;
    readonly borrowers: Iterable<IBorrower>;

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan {
        return undefined;
    }

    getPoints(borrower: IBorrower): number {
        return 0;
    }

    return(loan: Loan): Loan {
        return undefined;
    }
}