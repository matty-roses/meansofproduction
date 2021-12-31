import {ILibraryRepository, ILibrary, IUser} from "@meansofproduction/domain"


export class PostgresLibraryRepository implements ILibraryRepository {
    getAll(): Iterable<ILibrary> {
        throw new Error("Method not implemented.")
    }
    get(id: string): ILibrary {
        throw new Error("Method not implemented.")
    }
    add(item: ILibrary): ILibrary {
        throw new Error("Method not implemented.")
    }
    update(item: ILibrary): ILibrary {
        throw new Error("Method not implemented.")
    }
    delete(id: string): boolean {
        throw new Error("Method not implemented.")
    }
    getLibrariesUserIsAMemberOf(user: IUser): Iterable<ILibrary>{
        throw new Error("Method not implemented.")
    }
}