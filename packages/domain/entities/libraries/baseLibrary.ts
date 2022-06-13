import {ILibrary} from "./ILibrary";
import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {ThingTitle} from "../../valueItems/thingTitle";

export abstract class BaseLibrary implements ILibrary{
    private _borrowers:IBorrower[]
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
        const titlesMap = {}
        for (const item of items){
            if (!item.title.hash in titlesMap){
                titlesMap[item.title.hash] = item.title
            }
        }

        const res = []
        for(const hash in titlesMap){
            res.push(titlesMap[hash])
        }
        return res
    }

    protected addBorrower(borrower: IBorrower): IBorrower{
        this._borrowers.push(borrower)
        return borrower
    }


    abstract get allTitles(): Iterable<ThingTitle>

    abstract borrow(item: IThing, borrower: IBorrower, until: Date): ILoan

    abstract canBorrow(borrower: IBorrower): boolean

    abstract return(loan:ILoan): ILoan

}