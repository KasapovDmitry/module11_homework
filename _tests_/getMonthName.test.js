import { getMonthName } from "../getMonthName.js"

describe('test for getMonthName function', () => {
    const normal = 5;
    const minus = -5;
    const plus = 26;

    it("checking the number - normal", () => {
        expect(getMonthName(normal)).toBe('май')
    }),
    it("checking the number - minus", () => {
        expect(getMonthName(minus)).toBe("Введите номер от 1 до 12")
    }),
    it("checking the number - plus", () => {
        expect(getMonthName(plus)).toBe("Введите номер от 1 до 12")
    });
});
