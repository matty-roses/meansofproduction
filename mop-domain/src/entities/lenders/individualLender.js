"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualLender = void 0;
const loan_1 = require("../loan");
const person_1 = require("../person");
const loanStatus_1 = require("../../valueItems/loanStatus");
class IndividualLender extends person_1.Person {
    acceptReturn(loan) {
        return new loan_1.Loan(loan.item, loan.borrower, loan.dueDate, loanStatus_1.LoanStatus.RETURNED, loan.returnLocation);
    }
    markReturnAsDamaged(loan) {
        return new loan_1.Loan(loan.item, loan.borrower, loan.dueDate, loanStatus_1.LoanStatus.RETURNED_DAMAGED, loan.returnLocation);
    }
}
exports.IndividualLender = IndividualLender;
//# sourceMappingURL=individualLender.js.map