import {IBorrower} from "./borrower";
import {Money} from "../valueItems/money";
import {Thing} from "./thing";
import {IThingRepository} from "../repositories/thingRepository";
import {ILender} from "./lenders/ILender";
import {ILoan, Loan} from "./loan";
import {Person} from "./person";

export interface ILibrary{
    readonly name: string
    readonly chargesFees: boolean
    readonly members: Iterable<IBorrower>
    readonly availableItems: Iterable<Thing>
    canBorrow(borrower: IBorrower): boolean
    getFeesOwned(borrower: IBorrower): Money
    getPoints(borrower: IBorrower): number
    borrow(item: Thing, until: Date): Loan
    return(loan: Loan): Loan
}

export class DistributedLibraryWithFees implements ILibrary{
    private readonly _name: string
    public readonly maxFees: Money
    private readonly _userIDsAndFees: Record<string, Money>
    private readonly _lenders: Record<string, ILender>
    private readonly _thingRepository: IThingRepository;

    constructor(name: string, maxFees: Money, lenders: Iterable<ILender>, thingRepository: IThingRepository) {
        this._name = name
        this.maxFees = maxFees
        this._userIDsAndFees = {}

        this._lenders = {}
        for (const lender of lenders){
            this._lenders[lender.id] = lender
        }

        this._thingRepository = thingRepository
    }

    public get name(): string{
        return this._name
    }

    public get chargesFees(): boolean{
        return true
    }

    public canBorrow(borrower: IBorrower): boolean {
        const ids = this.getMemberIds()
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

    getItems(): Thing[] {
        const res = []
        for (const key in this._lenders){
            const lender = this._lenders[key]

            const things = this._thingRepository.getThingsForLender(lender)

            for (const thing of things) {
                res.push(thing)
            }
        }

        return res
    }

    public getMemberIds(): string[] {
        return Object.keys(this._userIDsAndFees)
    }

    getPoints(borrower: IBorrower): number {
        return 0;
    }
}