export interface IRepository<T> {
    getAll(): Iterable<T>
    get(id: string): T | null
    add(item: T): T
    update(item: T): T
    delete(id: string) : boolean
}