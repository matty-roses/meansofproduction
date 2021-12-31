import {IEntity} from "../entities/IEntity"

export interface IRepository<T extends IEntity> {
    getAll(): Iterable<T>
    get(id: string): T | null
    add(item: T): T
    update(item: T): T
    delete(id: string) : boolean
}