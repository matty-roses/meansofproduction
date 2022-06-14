import {ILibrary} from "./ILibrary";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";

export abstract class BaseLibrary implements ILibrary{
    private readonly _borrowers:IBorrower[]
    readonly name: string;

    protected constructor(name: string, borrowers: Iterable<IBorrower>) {
        this.name = name;
        this._borrowers = []
        for (const b of borrowers){
            this._borrowers.push(b)
        }
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


    abstract get allTitles(): Iterable<ThingTitle>

    abstract borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    abstract canBorrow(borrower: IBorrower): boolean

    abstract return(loan:ILoan): ILoan

}