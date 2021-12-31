import { isEven } from '@meansofproduction/is-even'

export function isOdd(i: number): boolean {
    return isEven(i) === false
}