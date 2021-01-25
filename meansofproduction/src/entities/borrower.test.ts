import {NumericBorrowCost} from "../valueItems/borrowCost";
import {PersonName} from "../valueItems/personName";
import {Thing} from "./thing";
import {ThingStatus} from "../valueItems/thingStatus";
import {InsufficientBorrowingCreditAvailableError, InvalidThingStatusToBorrow} from "../valueItems/exceptions";
import {Borrower} from "./borrower";
import {Loan} from "./loan";
import {LoanStatus} from "../valueItems/loanStatus";
import {Location} from "../valueItems/location";

const loc =  new Location(40.6501, -73.94958)

describe("Borrower", () => {
    it("should fail to loan if not enough credit", () => {
        const borrowerCredit = new NumericBorrowCost(0)
        const requiredCost = new NumericBorrowCost(1)

        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), borrowerCredit, borrowerCredit)
        const thing = new Thing("saw", "saw", requiredCost, loc)

        expect(() => borrower.borrow(thing, new Date())).toThrow(InsufficientBorrowingCreditAvailableError)
    })

    it("should fail to loan if item is damaged", () => {
        const cost = new NumericBorrowCost(1)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), cost, cost)
        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.DAMAGED)

        expect(() => borrower.borrow(thing, new Date())).toThrow(InvalidThingStatusToBorrow)
    })

    it("makes a loan when borrowing", () => {
        const cost = new NumericBorrowCost(1)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), cost, cost)
        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.READY)

        const loan = borrower.borrow(thing, new Date())

        expect(loan).not.toBeNull()
        expect(loan.active).toBeTruthy()
    })

    it("returns the capacity when an item is returned", () => {
        const current = new NumericBorrowCost(0)
        const max = new NumericBorrowCost(2)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), current, max)

        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.CURRENTLY_BORROWED)
        const loan = new Loan(thing, borrower, new Date())

        borrower.return(loan)

        expect(borrower.amountAbleToBorrow.amount).toEqual(1)
    })
    it("does not exceed the max amount on return", () => {
        const current = new NumericBorrowCost(0)
        const max = new NumericBorrowCost(2)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), current, max)

        const thing = new Thing("1", "testThing", new NumericBorrowCost(5), loc, ThingStatus.CURRENTLY_BORROWED)
        const loan = new Loan(thing, borrower, new Date())

        borrower.return(loan)

        expect(borrower.amountAbleToBorrow.amount).toEqual(2)
    })
    it("marks a loan as inactive once returned", () => {
        const current = new NumericBorrowCost(0)
        const max = new NumericBorrowCost(2)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), current, max)

        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.CURRENTLY_BORROWED)
        const loan = new Loan(thing, borrower, new Date())

        const updated = borrower.return(loan)

        expect(updated.active).not.toBeTruthy()
        expect(updated.status).toEqual(LoanStatus.RETURNED)
    })
})