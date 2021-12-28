import {NumericBorrowCost} from "../../valueItems/borrowCost";
import {PersonName} from "../../valueItems/personName";
import {Thing} from "../thing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {InvalidThingStatusToBorrow} from "../../valueItems/exceptions";
import {Borrower} from "../borrower";
import {Loan} from "../loan";
import {LoanStatus} from "../../valueItems/loanStatus";
import {Location} from "../../valueItems/location";
import {DistributedLibrary} from "./distributedLibrary";
import {Money} from "../../valueItems/money";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {PersonName} from "../../valueItems/personName"
import {EmailAddress} from "../../valueItems/emailAddress";

const loc =  new Location(40.6501, -73.94958)


describe("Borrower", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.DAMAGED, "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), [])
        const underTest = new DistributedLibrary(
            "testLib", Money.None, [lender], [borrower]
        )

         expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(InvalidThingStatusToBorrow)
    })

    it("makes a loan when borrowing", () => {
        const thing = new Thing("1", "testThing", new NumericBorrowCost(1), loc, ThingStatus.READY, "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), [])
        const underTest = new DistributedLibrary(
            "testLib", Money.None, [lender], [borrower]
        )
        const loan = underTest.borrow(thing, borrower, new Date())

        expect(loan).not.toBeNull()
        expect(loan.active).toBeTruthy()
    })
    it("marks a loan as inactive once returned", () => {
        const max = new NumericBorrowCost(2)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), current, max)

        const thing = new Thing(
            "1", "testThing",
            new NumericBorrowCost(1),
            loc,
            ThingStatus.CURRENTLY_BORROWED,
            "", [], null, null, [])
        const loan = new Loan(thing, borrower, new Date())

        const underTest = new DistributedLibrary(
            "testLib", Money.None, [lender], [borrower]
        )
        const updated = underTest.return(loan)

        expect(updated.active).not.toBeTruthy()
        expect(updated.status).toEqual(LoanStatus.RETURNED)
    })

    it("fails if borrower does not have enough permissions", () => {
        const current = new NumericBorrowCost(0)
        const max = new NumericBorrowCost(2)
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), current, max)

        const thing = new Thing(
            "1", "testThing",
            new NumericBorrowCost(1),
            loc,
            ThingStatus.CURRENTLY_BORROWED,
            "", [], null, null, [])
        const loan = new Loan(thing, borrower, new Date())
    })
})