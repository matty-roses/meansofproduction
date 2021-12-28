"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const borrowCost_1 = require("../../valueItems/borrowCost");
const personName_1 = require("../../valueItems/personName");
const thing_1 = require("../thing");
const thingStatus_1 = require("../../valueItems/thingStatus");
const exceptions_1 = require("../../valueItems/exceptions");
const borrower_1 = require("../borrower");
const loan_1 = require("../loan");
const location_1 = require("../../valueItems/location");
const distributedLibrary_1 = require("./distributedLibrary");
const money_1 = require("../../valueItems/money");
const individualDistributedLender_1 = require("../lenders/individualDistributedLender");
const emailAddress_1 = require("../../valueItems/emailAddress");
const noCost_1 = require("../../valueItems/noCost");
const loc = new location_1.Location(40.6501, -73.94958);
describe("Borrower", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new thing_1.Thing("1", "testThing", loc, new noCost_1.NoCost(), thingStatus_1.ThingStatus.DAMAGED, "", [], null, null, []);
        const lender = new individualDistributedLender_1.IndividualDistributedLender("testLender", new personName_1.PersonName("Testy", "McTesterson"), [new emailAddress_1.EmailAddress("test@test.com")], [thing]);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), []);
        const underTest = new distributedLibrary_1.DistributedLibrary("testLib", money_1.Money.None, [lender], [borrower]);
        expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(exceptions_1.InvalidThingStatusToBorrow);
    });
    it("makes a loan when borrowing", () => {
        const thing = new thing_1.Thing("1", "testThing", loc, new noCost_1.NoCost(), thingStatus_1.ThingStatus.READY, "", [], null, null, []);
        const lender = new individualDistributedLender_1.IndividualDistributedLender("testLender", new personName_1.PersonName("Testy", "McTesterson"), [new emailAddress_1.EmailAddress("test@test.com")], [thing]);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), []);
        const underTest = new distributedLibrary_1.DistributedLibrary("testLib", money_1.Money.None, [lender], [borrower]);
        const loan = underTest.borrow(thing, borrower, new Date());
        expect(loan).not.toBeNull();
        expect(loan.active).toBeTruthy();
    });
    it("marks a loan as inactive once returned", () => {
        const max = new borrowCost_1.NumericBorrowCost(2);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"));
        const thing = new thing_1.Thing("1", "testThing", loc, new noCost_1.NoCost(), thingStatus_1.ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new loan_1.Loan("loanId", thing, borrower, new Date());
        const lender = new individualDistributedLender_1.IndividualDistributedLender("testLender", new personName_1.PersonName("Testy", "McTesterson"), [new emailAddress_1.EmailAddress("test@test.com")], [thing]);
        const underTest = new distributedLibrary_1.DistributedLibrary("testLib", money_1.Money.None, [lender], [borrower]);
        const updated = underTest.return(loan);
        expect(updated.active).not.toBeTruthy();
    });
});
//# sourceMappingURL=distributedLibrary.test.js.map