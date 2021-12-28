import { User } from "../entities/user";
import { IUserRepository } from "./IUserRepository";
import { EmailAddress } from "../valueItems/emailAddress";
/***
 * Repository which, given an email, can pull all the user details
 */
export declare class SsoEnabledUserRepository implements IUserRepository {
    private readonly _items;
    constructor();
    add(item: User): User;
    delete(id: string): boolean;
    get(id: string): User | null;
    getAll(): Iterable<User>;
    update(item: User): User;
    getByEmail(email: EmailAddress): User;
}
