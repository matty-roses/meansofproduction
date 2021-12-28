"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowerVerificationFlags = void 0;
/* flags required of a borrower to get a loan for an item */
var BorrowerVerificationFlags;
(function (BorrowerVerificationFlags) {
    BorrowerVerificationFlags[BorrowerVerificationFlags["PHONE_NUMBER"] = 0] = "PHONE_NUMBER";
    BorrowerVerificationFlags[BorrowerVerificationFlags["EMAIL_VERIFIED"] = 1] = "EMAIL_VERIFIED";
    BorrowerVerificationFlags[BorrowerVerificationFlags["ID_SCANNED"] = 2] = "ID_SCANNED";
    BorrowerVerificationFlags[BorrowerVerificationFlags["CURRENT_ADDRESS_VERIFIED"] = 3] = "CURRENT_ADDRESS_VERIFIED";
    BorrowerVerificationFlags[BorrowerVerificationFlags["ITEM_RFID_CHIP"] = 4] = "ITEM_RFID_CHIP";
})(BorrowerVerificationFlags = exports.BorrowerVerificationFlags || (exports.BorrowerVerificationFlags = {}));
//# sourceMappingURL=borrowerVerificationFlags.js.map