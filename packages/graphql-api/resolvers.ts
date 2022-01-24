import {PostgresLibraryRepository} from "@meansofproduction/server-core"
import {ILibrary} from "@meansofproduction/domain"


function getLibraries(): Iterable<ILibrary>{
    const repo = new PostgresLibraryRepository()
    return repo.getAll()
}

export const resolvers = {
    Query: {
        libraries: () => [

        ]
    }
}