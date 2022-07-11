import {PersonName} from "../../valueItems/personName";
import {Thing} from "../things/thing";
import {ThingStatus} from "../../valueItems/thingStatus";
import {InvalidThingStatusToBorrow} from "../../valueItems/exceptions";
import {Borrower} from "../people/borrower";
import {Loan} from "../loans/loan";
import {Location} from "../../valueItems/location";
import {DistributedLibrary} from "../libraries/distributedLibrary";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {EmailAddress} from "../../valueItems/emailAddress";
import {Person} from "../people/person";
import {ThingTitle} from "../../valueItems/thingTitle";
import {USDMoney} from "../../valueItems/money/USDMoney";
import {WaitingListFactory} from "../../factories/waitingListFactory";

const loc =  new Location(40.6501, -73.94958)

const testPerson = new Person("1", new PersonName("Testy", "McTesterson"))
const testTitle = new ThingTitle("testThing")
const testLender = new IndividualDistributedLender("testLender", testPerson, [], [])

describe("DistributedLibrary", () => {
    it("should fail to loan if item is damaged", () => {
        const thing = new Thing("1", testTitle, loc, testLender, ThingStatus.DAMAGED, "", [],null, [])
        const lender = new IndividualDistributedLender("testLender", testPerson, [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", testPerson, new USDMoney(0), [lender], new WaitingListFactory(), []
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)

         expect(() => underTest.borrow(thing, borrower, new Date())).toThrow(InvalidThingStatusToBorrow)
    })

    it("makes a loan when borrowing", () => {
        const thing = new Thing("1", testTitle, loc, testLender, ThingStatus.READY, "", [],null, [])
        const lender = new IndividualDistributedLender("testLender", testPerson, [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", testPerson, new USDMoney(0), [lender], new WaitingListFactory(), []
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)
        const loan = underTest.borrow(thing, borrower, new Date())

        expect(loan).not.toBeNull()
        expect(loan.active).toBeTruthy()
    })
    it("marks a loan as inactive once returned", () => {
        const thing = new Thing(
            "1", testTitle,
            loc,
            testLender,
            ThingStatus.CURRENTLY_BORROWED,
            "", [],null, [])
        const lender = new IndividualDistributedLender("testLender", testPerson, [new EmailAddress("test@test.com")], [thing])

        const underTest = new DistributedLibrary(
            "testLib", testPerson, new USDMoney(0), [lender], new WaitingListFactory(), []
        )
        const borrower = new Borrower("1",testPerson, underTest)
        underTest.addBorrower(borrower)
        const loan = new Loan("loanId", thing, borrower, new Date())

        // action needed!
    })
})