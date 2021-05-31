import {IBorrower} from "./borrower";
import {Money} from "../valueItems/money";
import {Thing} from "./thing";
import {IUserRepository} from "../repositories/IUserRepository";

export interface ILibrary{
    readonly name: string
    readonly chargesFees: boolean
    canBorrow(borrower: IBorrower): boolean
    getFeesOwned(borrower: IBorrower): Money
    getPoints(borrower: IBorrower): number

    getMembers(): Iterable<IBorrower>
    getItems(): Iterable<Thing>
}

export class DistributedLibraryWithFees implements ILibrary{
    private readonly _name: string
    public readonly maxFees: Money
    private readonly _userIDsAndFees: Record<string, Money>
    private readonly _userRepo: IUserRepository

    constructor(name: string, maxFees: Money, userRepo: IUserRepository) {
        this._name = name
        this.maxFees = maxFees
        this._userIDsAndFees = {}
        this._userRepo = userRepo
    }

    public get name(): string{
        return this._name
    }

    public get chargesFees(): boolean{
        return true
    }

    public canBorrow(borrower: IBorrower): boolean {
        if(!(borrower.id in this.getMembers())){
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

    getItems(): Iterable<Thing> {
        return undefined;
    }

    getMembers(): Iterable<IBorrower> {
        return undefined;
    }

    getPoints(borrower: IBorrower): number {
        return 0;
    }
}