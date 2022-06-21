import {IRepository} from "./IRepository";
import {User} from "../entities/people/user";
import {ILibrary} from "../entities/libraries/ILibrary";


export interface ILibraryRepository extends IRepository<ILibrary>{
    getLibrariesUserIsAMemberOf(user: User): Iterable<ILibrary>
}