import { NumericBorrowCost } from "./borrowCost";

describe("BorrowCost", () => {
    it("should be able to return cost", () => {
        const underTest = new NumericBorrowCost(110.83)

        expect(underTest.amount).toEqual(110.83)
    })
})