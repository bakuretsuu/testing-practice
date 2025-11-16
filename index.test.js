import { capitalize, reverseString, calculator} from "./index";

test('capitalize Bakuretsu', () => {
    expect(capitalize('bakuretsu')).toBe('Bakuretsu')
})

test('reverse bakuretsu', () =>{
    expect(reverseString('bakuretsu')).toBe('usterukab')
})

test('1 + 2', () => {
    expect(calculator.add(1,2)).toBe(3)
})

test('5 - 3', () => {
    expect(calculator.subtract(5,3)).toBe(2)
})

test('64 / 5', () => {
    expect(calculator.divide(64,5)).toBe(12.8)
})

test('2 * 5', () => {
    expect(calculator.multiply(2,5)).toBe(10)
})

test
