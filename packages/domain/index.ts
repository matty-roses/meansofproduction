import { Person} from "./entities/person";
import { Borrower } from "./entities/borrower";
import { Thing} from "./entities/thing";
import { Loan } from "./entities/loan";

import { ThingStatus} from "./valueItems/thingStatus";
import {DistributedLibrary} from "./entities/libraries/distributedLibrary";

export * from "./entities/libraries/distributedLibrary"
export * from "./entities/person"

export const meaningOfLife = 42