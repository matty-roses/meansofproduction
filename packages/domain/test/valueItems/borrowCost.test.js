import { NumericBorrowCost } from "../../src/valueItems/borrowCost";
describe("BorrowCost", () => {
    it("should be able to return cost", () => {
        const underTest = new NumericBorrowCost(110.83);
        expect(underTest.amount).toEqual(110.83);
    });
});
//# sourceMappingURL=borrowCost.test.js.map