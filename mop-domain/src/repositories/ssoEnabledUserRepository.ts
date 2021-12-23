import {User} from "../entities/user";
import {IUserRepository} from "./IUserRepository";
import {EmailAddress} from "../valueItems/emailAddress";

/***
 * Repository which, given an email, can pull all the user details
 */
export class SsoEnabledUserRepository implements IUserRepository{
    private readonly _items: Record<string, User>
    public constructor() {
        this._items = {}
    }

    add(item: User): User {
        if(item.id in this._items){
            throw new Error(`Item id ${item.id} is already added, did you mean to update?`)
        }

        // check to make sure our emails are unique per user!
        this._items[item.id] = item
    }

    delete(id: string): boolean {
        return false;
    }

    get(id: string): User | null {
        return undefined;
    }

    getAll(): Iterable<User> {
        return undefined;
    }

    update(item: User): User {
        return undefined;
    }

    getByEmail(email: EmailAddress): User {
        return undefined;
    }
}