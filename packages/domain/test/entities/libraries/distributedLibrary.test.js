import { NumericBorrowCost } from "../../../src/valueItems/borrowCost";
import { PersonName } from "../../../src/valueItems/personName";
import { Thing } from "../../../src/entities/thing";
import { ThingStatus } from "../../../src/valueItems/thingStatus";
import { InvalidThingStatusToBorrow } from "../../../src/valueItems/exceptions";
import { Borrower } from "../../../src/entities/borrower";
import { Loan } from "../../../src/entities/loan";
import { Location } from "../../../src/valueItems/location";
import { DistributedLibrary } from "../../../src/entities/libraries/distributedLibrary";
import { Money } from "../../../src/valueItems/money";
import { IndividualDistributedLender } from "../../../src/entities/lenders/individualDistributedLender";
import { EmailAddress } from "../../../src/valueItems/emailAddress";
import { NoCost } from "../../../src/valueItems/noCost";
const loc = new Location(40.6501, -73.94958);
describe("DistributedLibrary", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.DAMAGED, "", [], null, null, []);
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing]);
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), []);
        const underTest = new DistributedLibrary("testLib", Money.None, [lender], [borrower]);
        expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(InvalidThingStatusToBorrow);
    });
    it("makes a loan when borrowing", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.READY, "", [], null, null, []);
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing]);
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), []);
        const underTest = new DistributedLibrary("testLib", Money.None, [lender], [borrower]);
        const loan = underTest.borrow(thing, borrower, new Date());
        expect(loan).not.toBeNull();
        expect(loan.active).toBeTruthy();
    });
    it("marks a loan as inactive once returned", () => {
        const max = new NumericBorrowCost(2);
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"));
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new Loan("loanId", thing, borrower, new Date());
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing]);
        const underTest = new DistributedLibrary("testLib", Money.None, [lender], [borrower]);
        const updated = underTest.return(loan);
        expect(updated.active).not.toBeTruthy();
    });
});
//# sourceMappingURL=distributedLibrary.test.js.map