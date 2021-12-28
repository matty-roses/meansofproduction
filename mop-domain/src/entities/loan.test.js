"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_1 = require("./loan");
const thing_1 = require("./thing");
const personName_1 = require("../valueItems/personName");
const loanStatus_1 = require("../valueItems/loanStatus");
const thingStatus_1 = require("../valueItems/thingStatus");
const borrowCost_1 = require("../valueItems/borrowCost");
const borrower_1 = require("./borrower");
const location_1 = require("../valueItems/location");
const loc = new location_1.Location(40.6501, -73.94958);
describe("Loan", () => {
    it('should change item to damaged when returned damaged', () => {
        const cost = new borrowCost_1.NumericBorrowCost(1);
        const borrower = new borrower_1.Borrower("bob", new personName_1.PersonName("Doug", "Jones"), cost, cost);
        const thing = new thing_1.Thing("test", "test", cost, loc, thingStatus_1.ThingStatus.READY, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date(2020, 12, 23));
        expect(loan.active).toEqual(true);
        // act
        loan.status = loanStatus_1.LoanStatus.RETURNED_DAMAGED;
        expect(loan.item.status).toEqual(thingStatus_1.ThingStatus.DAMAGED);
        expect(loan.status).toEqual(loanStatus_1.LoanStatus.RETURNED_DAMAGED);
    });
});
describe("Loan", () => {
    it('should change item to ready when loan is ready', () => {
        const cost = new borrowCost_1.NumericBorrowCost(1);
        const borrower = new borrower_1.Borrower("bob", new personName_1.PersonName("Doug", "Jones"), cost, cost);
        const thing = new thing_1.Thing("test", "test", cost, loc, thingStatus_1.ThingStatus.READY, "", [], null, null, []);
        const loan = new loan_1.Loan(thing, borrower, new Date(2020, 12, 23));
        expect(loan.active).toEqual(true);
        // act
        loan.status = loanStatus_1.LoanStatus.RETURNED;
        expect(loan.item.status).toEqual(thingStatus_1.ThingStatus.READY);
        expect(loan.status).toEqual(loanStatus_1.LoanStatus.RETURNED);
        expect(loan.active).toEqual(false);
    });
});
//# sourceMappingURL=loan.test.js.map