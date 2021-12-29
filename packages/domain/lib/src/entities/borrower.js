import { Person } from "./person";
export class Borrower extends Person {
    constructor(id, name, emails = [], verificationFlags = []) {
        super(id, name, emails);
        this.verificationFlags = verificationFlags;
    }
}
//# sourceMappingURL=borrower.js.map