import {Loan} from "../../src/entities/loan"
import {Thing} from "../../src/entities/thing"
import {PersonName} from "../../src/valueItems/personName"
import {LoanStatus} from "../../src/valueItems/loanStatus"
import {ThingStatus} from "../../src/valueItems/thingStatus"
import {Borrower} from "../../src/entities/borrower";
import {Location} from "../../src/valueItems/location"
import {NoCost} from "../../src/valueItems/noCost";

const loc = new Location(40.6501, -73.94958)

describe("Loan", () => {
    it('should change item to damaged when returned damaged', () => {
        const borrower = new Borrower("bob", new PersonName("Doug", "Jones"))
        const thing = new Thing("test", "test", loc, new NoCost(), ThingStatus.READY, "", [], null, null, [])

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
        const borrower = new Borrower("bob", new PersonName("Doug", "Jones"))
        const thing = new Thing("test", "test", loc, new NoCost(), ThingStatus.READY, "", [], null, null, [])

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