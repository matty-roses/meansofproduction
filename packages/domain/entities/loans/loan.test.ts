import {Loan} from "./loan"
import {Thing} from "../things/thing"
import {PersonName} from "../../valueItems/personName"
import {Person} from "../people/person";
import {LoanStatus} from "../../valueItems/loanStatus"
import {ThingStatus} from "../../valueItems/thingStatus"
import {Borrower} from "../people/borrower";
import {Location} from "../../valueItems/location"
import {SimpleLibrary} from "../libraries/simpleLibrary";
import {ThingTitle} from "../../valueItems/thingTitle";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";

const loc = new Location(40.6501, -73.94958)

const testLib = new SimpleLibrary("testLibrary", new Location(0, 0), [], []);
const testPerson = new Person("bob", new PersonName("Doug", "Jones"))

const testTitle = new ThingTitle("test")
const testLender = new IndividualDistributedLender("lender", new Person("test", new PersonName("Testy", "McTesterson")),[], [])

describe("Loan", () => {
    it('should change item to damaged when returned damaged', () => {
        const borrower = new Borrower("1", testPerson, testLib)
        const thing = new Thing("test", testTitle, loc, testLender, ThingStatus.READY, "", [], null, [])

        const loan = new Loan(
            "loanId",
            thing,
            borrower,
            new Date(2020,12,23)
        )

        expect(loan.active).toEqual(true)

        // act
        loan.markItemDamaged()

        expect(loan.item.status).toEqual(ThingStatus.DAMAGED)
        expect(loan.status).toEqual(LoanStatus.RETURNED_DAMAGED)
    })

    it('should change item to ready when loan is ready', () => {
        const borrower = new Borrower("1", testPerson, testLib)
        const thing = new Thing("test", testTitle, loc, testLender, ThingStatus.READY, "", [], null, [])

        const loan = new Loan(
            "testId",
            thing,
            borrower,
            new Date(2020,12,23)
        )

        expect(loan.active).toEqual(true)

        // act
        loan.startReturn()

        expect(loan.item.status).toEqual(ThingStatus.READY)
        expect(loan.status).toEqual(LoanStatus.RETURN_STARTED)
        expect(loan.active).toEqual(false)
    })
})