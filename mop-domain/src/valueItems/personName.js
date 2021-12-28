"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonName = void 0;
class PersonName {
    firstName;
    middleName;
    lastName;
    constructor(firstName, lastName, middleName = "") {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}
exports.PersonName = PersonName;
//# sourceMappingURL=personName.js.map