"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const borrowCost_1 = require("../valueItems/borrowCost");
const personName_1 = require("../valueItems/personName");
const thing_1 = require("./thing");
const thingStatus_1 = require("../valueItems/thingStatus");
const exceptions_1 = require("../valueItems/exceptions");
const borrower_1 = require("./borrower");
const loan_1 = require("./loan");
const loanStatus_1 = require("../valueItems/loanStatus");
const location_1 = require("../valueItems/location");
const loc = new location_1.Location(40.6501, -73.94958);
describe("Borrower", () => {
    it("should fail to loan if not enough credit", () => {
        const borrowerCredit = new borrowCost_1.NumericBorrowCost(0);
        const requiredCost = new borrowCost_1.NumericBorrowCost(1);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), borrowerCredit, borrowerCredit);
        const thing = new thing_1.Thing("saw", "saw", requiredCost, loc, thingStatus_1.ThingStatus.READY, "", [], null, null, []);
        expect(() => borrower.borrow(thing, new Date())).toThrow(exceptions_1.InsufficientBorrowingCreditAvailableError);
    });
    it("should fail to loan if item is damaged", () => {
        const cost = new borrowCost_1.NumericBorrowCost(1);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), cost, cost);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(1), loc, thingStatus_1.ThingStatus.DAMAGED, "", [], null, null, []);
        expect(() => borrower.borrow(thing, new Date())).toThrow(exceptions_1.InvalidThingStatusToBorrow);
    });
    it("makes a loan when borrowing", () => {
        const cost = new borrowCost_1.NumericBorrowCost(1);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), cost, cost);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(1), loc, thingStatus_1.ThingStatus.READY, "", [], null, null, []);
        const loan = borrower.borrow(thing, new Date());
        expect(loan).not.toBeNull();
        expect(loan.active).toBeTruthy();
    });
    it("returns the capacity when an item is returned", () => {
        const current = new borrowCost_1.NumericBorrowCost(0);
        const max = new borrowCost_1.NumericBorrowCost(2);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), current, max);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(1), loc, thingStatus_1.ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date());
        borrower.return(loan);
        expect(borrower.amountAbleToBorrow.amount).toEqual(1);
    });
    it("does not exceed the max amount on return", () => {
        const current = new borrowCost_1.NumericBorrowCost(0);
        const max = new borrowCost_1.NumericBorrowCost(2);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), current, max);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(5), loc, thingStatus_1.ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date());
        borrower.return(loan);
        expect(borrower.amountAbleToBorrow.amount).toEqual(2);
    });
    it("marks a loan as inactive once returned", () => {
        const current = new borrowCost_1.NumericBorrowCost(0);
        const max = new borrowCost_1.NumericBorrowCost(2);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), current, max);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(1), loc, thingStatus_1.ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date());
        const updated = borrower.return(loan);
        expect(updated.active).not.toBeTruthy();
        expect(updated.status).toEqual(loanStatus_1.LoanStatus.RETURNED);
    });
    it("fails if borrower does not have enough permissions", () => {
        const current = new borrowCost_1.NumericBorrowCost(0);
        const max = new borrowCost_1.NumericBorrowCost(2);
        const borrower = new borrower_1.Borrower("1", new personName_1.PersonName("Testy", "McTesterson"), current, max);
        const thing = new thing_1.Thing("1", "testThing", new borrowCost_1.NumericBorrowCost(1), loc, thingStatus_1.ThingStatus.CURRENTLY_BORROWED, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date());
    });
});
//# sourceMappingURL=library.test.js.map