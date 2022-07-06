import { Thing } from "../entities/things/thing";
import { IRepository } from "./IRepository";
import {ILender} from "../entities/lenders/ILender";

export interface IThingRepository extends IRepository<Thing>{
    getThingsForLender(lender: ILender): Thing[]
}