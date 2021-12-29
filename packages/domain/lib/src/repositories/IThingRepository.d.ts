import { Thing } from "../entities/thing";
import { IRepository } from "./IRepository";
import { ILender } from "../entities/lenders/ILender";
export interface IThingRepository extends IRepository<Thing> {
    getThingsForLender(lender: ILender): Thing[];
}
//# sourceMappingURL=IThingRepository.d.ts.map