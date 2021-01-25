import { Loan } from "./loan"
import { Thing } from "./thing"
import {PersonName} from "../valueItems/personName"
import {LoanStatus} from "../valueItems/loanStatus"
import {ThingStatus} from "../valueItems/thingStatus"
import {NumericBorrowCost} from "../valueItems/borrowCost";
import {Borrower} from "./borrower";
import {Location} from "../valueItems/location"

const loc = new Location(40.6501, -73.94958)

describe("Loan", () => {
    it('should change item to damaged when returned damaged', () => {
        const cost = new NumericBorrowCost(1)
        const borrower = new Borrower("bob", new PersonName("Doug", "Jones"), cost, cost)
        const thing = new Thing("test", "test", cost, loc)

        const loan = new Loan(
            thing,
            borrower,
            new Date(2020,12,23)
        )

        expect(loan.active).toEqual(true)
        // act
        loan.status = LoanStatus.RETURNED_DAMAGED

        expect(loan.item.status).toEqual(ThingStatus.DAMAGED)
        expect(loan.status).toEqual(LoanStatus.RETURNED_DAMAGED)
    })
})

describe("Loan", () => {
    it('should change item to ready when loan is ready', () => {
        const cost = new NumericBorrowCost(1)
        const borrower = new Borrower("bob", new PersonName("Doug", "Jones"), cost, cost)
        const thing = new Thing("test", "test", cost, loc)

        const loan = new Loan(
            thing,
            borrower,
            new Date(2020,12,23)
        )

        expect(loan.active).toEqual(true)

        // act
        loan.status = LoanStatus.RETURNED

        expect(loan.item.status).toEqual(ThingStatus.READY)
        expect(loan.status).toEqual(LoanStatus.RETURNED)
        expect(loan.active).toEqual(false)
    })
})