import {meaningOfLife} from "@meansofproduction/domain"

export function isOdd(): boolean{
    return meaningOfLife % 2 === 0
}

export * from "./repositories/libraryRepository"