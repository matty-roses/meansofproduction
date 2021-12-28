"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrower = void 0;
const person_1 = require("./person");
class Borrower extends person_1.Person {
    verificationFlags;
    constructor(id, name, emails = [], verificationFlags = []) {
        super(id, name, emails);
        this.verificationFlags = verificationFlags;
    }
}
exports.Borrower = Borrower;
//# sourceMappingURL=borrower.js.map