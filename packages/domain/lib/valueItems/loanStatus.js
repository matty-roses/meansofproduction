export var LoanStatus;
(function (LoanStatus) {
    LoanStatus[LoanStatus["REQUESTED"] = 0] = "REQUESTED";
    LoanStatus[LoanStatus["LOANED"] = 1] = "LOANED";
    LoanStatus[LoanStatus["OVERDUE"] = 2] = "OVERDUE";
    LoanStatus[LoanStatus["WRITTEN_OFF"] = 3] = "WRITTEN_OFF";
    LoanStatus[LoanStatus["RETURN_STARTED"] = 4] = "RETURN_STARTED";
    LoanStatus[LoanStatus["RETURNED_DAMAGED"] = 5] = "RETURNED_DAMAGED";
    LoanStatus[LoanStatus["RETURNED"] = 6] = "RETURNED"; // someone borrow this and actually brought it back correct
})(LoanStatus || (LoanStatus = {}));
//# sourceMappingURL=loanStatus.js.map