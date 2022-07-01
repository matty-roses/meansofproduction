import {ILibrary} from "./ILibrary";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";
import {IWaitingListFactory} from "../../factories/IWaitingListFactory";
import {IWaitingList} from "./IWaitingList";
import {Person} from "../people/person";

export abstract class BaseLibrary implements ILibrary{
    private readonly _borrowers:IBorrower[]
    readonly name: string;
    readonly waitingListFactory: IWaitingListFactory
    readonly waitingListsByItemId: Map<string, IWaitingList>
    readonly administrator: Person;

    protected constructor(name: string, administrator: Person, borrowers: Iterable<IBorrower>, waitingListFactory: IWaitingListFactory) {
        this.name = name;
        this.waitingListFactory = waitingListFactory
        this._borrowers = []
        this.administrator = administrator
        for (const b of borrowers){
            this._borrowers.push(b)
        }
        this.waitingListsByItemId= new Map<string, IWaitingList>()
    }

    protected makeLoanId(): string{
        return "guid"
    }

    public get borrowers(): Iterable<IBorrower>{
        return this._borrowers
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

    public addBorrower(borrower: IBorrower): IBorrower{
        this._borrowers.push(borrower)
        return borrower
    }

    reserveItem(item: IThing, borrower: IBorrower): IWaitingList {
        let list: IWaitingList | undefined = this.waitingListsByItemId.get(item.id)
        if(!list){
            list = this.waitingListFactory.createList(item)
            this.waitingListsByItemId.set(item.id, list)
        }
        list.add(borrower)
        return list
    }

    abstract get allTitles(): Iterable<ThingTitle>
    abstract get availableTitles(): Iterable<ThingTitle>

    abstract borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    abstract canBorrow(borrower: IBorrower): boolean

    abstract return(loan:ILoan): ILoan

}