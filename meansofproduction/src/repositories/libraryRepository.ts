import {ILibrary} from "../entities/library";
import {IRepository} from "./IRepository";
import {User} from "../entities/user";


export interface ILibraryRepository extends IRepository<ILibrary>{
    getLibrariesUserIsAMemberOf(user: User): Iterable<ILibrary>
}