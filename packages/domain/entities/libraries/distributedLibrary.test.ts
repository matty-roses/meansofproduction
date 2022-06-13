import {NumericBorrowCost} from "../../valueItems/borrowCost";
import {PersonName} from "../../valueItems/personName";
import {Thing} from "../things/thing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {InvalidThingStatusToBorrow} from "../../valueItems/exceptions";
import {Borrower} from "../people/borrower";
import {Loan} from "../loans/loan";
import {Location} from "../../valueItems/location";
import {DistributedLibrary} from "../libraries/distributedLibrary";
import {NoMoney} from "../../valueItems/money/NoMoney";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {EmailAddress} from "../../valueItems/emailAddress";
import {NoCost} from "../../valueItems/noCost";
import {Person} from "../people/person";

const loc =  new Location(40.6501, -73.94958)

const testPerson = new Person("1", new PersonName("Testy", "McTesterson"))
describe("DistributedLibrary", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.DAMAGED, "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", new NoMoney(), [lender]
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)

         expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(InvalidThingStatusToBorrow)
    })

    it("makes a loan when borrowing", () => {
        const thing = new Thing("1", "testThing", loc, new NoCost(), ThingStatus.READY, "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", new NoMoney(), [lender]
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)
        const loan = underTest.borrow(thing, borrower, new Date())

        expect(loan).not.toBeNull()
        expect(loan.active).toBeTruthy()
    })
    it("marks a loan as inactive once returned", () => {
        const thing = new Thing(
            "1", "testThing",
            loc,
            new NoCost(),
            ThingStatus.CURRENTLY_BORROWED,
            "", [], null, null, [])
        const lender = new IndividualDistributedLender("testLender", new PersonName("Testy", "McTesterson"), [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", new NoMoney(), [lender]
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)
        const loan = new Loan("loanId", thing, borrower, new Date())
        const updated = underTest.return(loan)

        expect(updated.active).not.toBeTruthy()
    })
})