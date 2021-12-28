"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const borrowCost_1 = require("./borrowCost");
describe("BorrowCost", () => {
    it("should be able to return cost", () => {
        const underTest = new borrowCost_1.NumericBorrowCost(110.83);
        expect(underTest.amount).toEqual(110.83);
    });
});
//# sourceMappingURL=borrowCost.test.js.map