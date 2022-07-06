import {BorrowerVerificationFlags} from "../../valueItems/borrowerVerificationFlags"
import {ILibrary} from "../libraries/ILibrary";
import {ILibraryFee} from "../libraries/ILibraryFee";
import {Person} from "./person";

// this is the equivalent of a library card
export interface IBorrower {
    readonly id: string
    readonly person: Person;
    readonly library: ILibrary;
    readonly verificationFlags: Iterable<BorrowerVerificationFlags>;
    readonly fees: Iterable<ILibraryFee>;
}