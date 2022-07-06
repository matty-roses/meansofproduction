import {Thing} from "./thing";
import {ThingTitle} from "../../valueItems/thingTitle";
import {Location} from "../../valueItems/location";
import {ThingStatus} from "../../valueItems/thingStatus";
import {IndividualDistributedLender} from "../lenders/individualDistributedLender";
import {Person} from "../people/person";
import {PersonName} from "../../valueItems/personName";


describe("Thing", ()=>{
    it("stores values in constructor", () => {
        const location = new Location(0, 0)
        const title = new ThingTitle("thingName", "isbn", "upc")
        const lender = new IndividualDistributedLender(
            "lender",
            new Person("person", new PersonName("Testy", "McTesterson")),
            [],
            []
        )

        const res = new Thing(
           "id",
           title,
           location,
            lender,
            ThingStatus.CURRENTLY_BORROWED,
            "description",
            ["http://example.com/img1.jpg"],
            null,
            []
        )

        expect(res).not.toBeNull()
    });
});
