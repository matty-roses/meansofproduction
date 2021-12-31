import {IRepository} from "./IRepository";
import {IUser} from "../entities/IUser";
import {ILibrary} from "../entities/libraries/ILibrary";


export interface ILibraryRepository extends IRepository<ILibrary>{
    getLibrariesUserIsAMemberOf(user: IUser): Iterable<ILibrary>
}