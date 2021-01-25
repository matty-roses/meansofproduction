import { Thing } from "../entities/thing";
import { IRepository } from "./IRepository";

export interface IThingRepository extends IRepository<Thing>{
}