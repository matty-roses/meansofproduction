import { ILoan } from "../loan";
import { Person } from "../person";
import { ILender } from "./ILender";
import { IThing } from "../thing";
import { PersonName } from "../../valueItems/personName";
import { EmailAddress } from "../../valueItems/emailAddress";
import { Location } from "../../valueItems/location";
export declare class IndividualDistributedLender extends Person implements ILender {
    private readonly _items;
    private readonly _returnLocationOverride;
    constructor(id: string, name: PersonName, emails: EmailAddress[] | undefined, items: Iterable<IThing>, returnLocationOverride?: Location);
    startReturn(loan: ILoan): ILoan;
    finishReturn(loan: ILoan): ILoan;
    get items(): Iterable<IThing>;
    preferredReturnLocation(item: IThing): Location;
}
//# sourceMappingURL=individualDistributedLender.d.ts.map