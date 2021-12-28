"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    id;
    name;
    emails;
    constructor(id, name, emails = []) {
        this.id = id;
        this.name = name;
        this.emails = emails;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map