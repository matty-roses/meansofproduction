import {IThing} from "../things/IThing";
import {IBorrower} from "../people/IBorrower";
import {ILoan} from "../loans/ILoan";
import {BaseLibrary} from "./baseLibrary"
import {ThingTitle} from "../../valueItems/thingTitle";


export class SimpleLibrary extends BaseLibrary{
    protected readonly items: Iterable<IThing>

    constructor(name: string, items: Iterable<IThing>, borrowers: Iterable<IBorrower>) {
        super(name, borrowers);
        this.items = items
    }

    borrow(item: IThing, borrower: IBorrower, until: Date): ILoan {
        // check if avaialble
        // check if borrower in good standing
        //make loan
        return undefined;
    }

    canBorrow(borrower: IBorrower): boolean {
        return false;
    }

    return(loan: ILoan): ILoan {
        return undefined;
    }

    get allTitles(): Iterable<ThingTitle> {
        return this.getTitlesFromItems(this.items)
    }

}