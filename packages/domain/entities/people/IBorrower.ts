import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags"
import {ILibrary} from "../libraries/ILibrary";
import {ILibraryFee} from "../libraries/ILibraryFee";

// this is the equivalent of a library card
export interface IBorrower {
    readonly id: string
    readonly library: ILibrary;
    readonly verificationFlags: Iterable<BorrowerVerificationFlags>;
    readonly fees: Iterable<ILibraryFee>;
}