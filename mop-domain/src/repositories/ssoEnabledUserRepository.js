"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsoEnabledUserRepository = void 0;
/***
 * Repository which, given an email, can pull all the user details
 */
class SsoEnabledUserRepository {
    _items;
    constructor() {
        this._items = {};
    }
    add(item) {
        if (item.id in this._items) {
            throw new Error(`Item id ${item.id} is already added, did you mean to update?`);
        }
        // check to make sure our emails are unique per user!
        this._items[item.id] = item;
    }
    delete(id) {
        return false;
    }
    get(id) {
        return undefined;
    }
    getAll() {
        return undefined;
    }
    update(item) {
        return undefined;
    }
    getByEmail(email) {
        return undefined;
    }
}
exports.SsoEnabledUserRepository = SsoEnabledUserRepository;
//# sourceMappingURL=ssoEnabledUserRepository.js.map