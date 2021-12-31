import { isOdd } from "./index";

describe('isOdd', () => {
    test('it tests even', () => {
        expect(isOdd()).toBe(true)
    })
});