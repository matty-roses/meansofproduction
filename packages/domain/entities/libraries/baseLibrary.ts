import {ILibrary} from "./ILibrary";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";
import {IWaitingListFactory} from "../../factories/IWaitingListFactory";
import {IWaitingList} from "../waitingLists/IWaitingList";
import {Person} from "../people/person";
import {IMoney} from "../../valueItems/money/IMoney";

export abstract class BaseLibrary implements ILibrary{
    private readonly _borrowers: IBorrower[]
    private readonly _loans: ILoan[]
    readonly name: string;
    readonly waitingListFactory: IWaitingListFactory
    readonly waitingListsByItemId: Map<string, IWaitingList>
    readonly administrator: Person;
    readonly maxFinesBeforeSuspension: IMoney

    protected constructor(name: string, administrator: Person, borrowers: Iterable<IBorrower>, waitingListFactory: IWaitingListFactory, maxFinesBeforeSuspension: IMoney, loans: Iterable<ILoan>) {
        this.name = name;
        this.waitingListFactory = waitingListFactory
        this._borrowers = []
        this.administrator = administrator
        for (const b of borrowers){
            this._borrowers.push(b)
        }
        this.waitingListsByItemId= new Map<string, IWaitingList>()
        this.maxFinesBeforeSuspension = maxFinesBeforeSuspension
        this._loans = []
        for(const l of loans){
            this._loans.push(l)
        }
    }

    abstract get allTitles(): Iterable<ThingTitle>
    abstract get availableTitles(): Iterable<ThingTitle>

    abstract borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    abstract canBorrow(borrower: IBorrower): boolean

    abstract startReturn(loan:ILoan): ILoan
    abstract finishReturn(loan: ILoan): ILoan

    abstract markAsDamaged(item: IThing): IThing;

    public get borrowers(): Iterable<IBorrower>{
        return this._borrowers
    }

    public addBorrower(borrower: IBorrower): IBorrower{
        this._borrowers.push(borrower)
        return borrower
    }

    public reserveItem(item: IThing, borrower: IBorrower): IWaitingList {
        let list: IWaitingList | undefined = this.waitingListsByItemId.get(item.id)
        if(!list){
            list = this.waitingListFactory.createList(item)
            this.waitingListsByItemId.set(item.id, list)
        }
        list.add(borrower)
        return list
    }

    protected getTitlesFromItems(items: Iterable<IThing>): Iterable<ThingTitle>{
        const titles = []
        for (const item of items){
            const existing = titles.filter(t => t.equals(item.title))
            if(existing.length === 0){
                titles.push(item.title)
            }
        }

        return titles
    }

    protected makeLoanId(): string{
        return "guid"
    }

    private static compareLoans(a: ILoan, b: ILoan): number {
        if(a.dueDate && b.dueDate){
            return b.dueDate > a.dueDate ? 1 : -1
        }

        // consider a null due date to be infinite
        if(b.dueDate){
            return 1
        }

        if(a.dueDate){
            return -1
        }
        return 0
    }

    protected getBidForCost(item: IThing, borrower: IBorrower, amountToPay: IMoney): IMoney{
        // get loans for the item
        const itemLoans = this._loans
            .filter(l => l.item.id == item.id)
            .sort(BaseLibrary.compareLoans)

        // find how many times consecutively this borrower has borrowed this item
        let numPreviousLoans = 0
        for(const l of itemLoans){
            if(l.borrower.id == borrower.id){
                numPreviousLoans += 1
            } else {
                break;
            }
        }

        // multiple effective rate times this
        return numPreviousLoans > 0 ? amountToPay.multiply(1/numPreviousLoans) : amountToPay
    }
}