import {NumericBorrowCost} from "../../valueItems/borrowCost";
import {PersonName} from "../../valueItems/personName";
import {Thing} from "../thing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {InvalidThingStatusToBorrow} from "../../valueItems/exceptions";
import {Borrower} from "../borrower";
import {Loan} from "../loan";
import {Location} from "../../valueItems/location";
import {DistributedLibrary} from "./distributedLibrary";
import {Money} from "../../valueItems/money";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {EmailAddress} from "../../valueItems/emailAddress";
import {NoCost} from "../../valueItems/noCost";

const loc =  new Location(40.6501, -73.94958)


describe("Borrower", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.DAMAGED, "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"), [])
        const underTest = new DistributedLibrary(
            "testLib", Money.None, [lender], [borrower]
        )

         expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(InvalidThingStatusToBorrow)
    })

    it("makes a loan when borrowing", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.READY, "", [], null, null, [])
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
        const borrower = new Borrower("1", new PersonName("Testy", "McTesterson"))

        const thing = new Thing(
            "1", "testThing",
            loc,
            new NoCost(),
            ThingStatus.CURRENTLY_BORROWED,
            "", [], null, null, [])
        const loan = new Loan("loanId", thing, borrower, new Date())
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", Money.None, [lender], [borrower]
        )
        const updated = underTest.return(loan)

        expect(updated.active).not.toBeTruthy()
    })
})