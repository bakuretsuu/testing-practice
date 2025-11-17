// index.test.js
import { capitalize, reverseString, calculator, caesarCipher} from "./index";

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

test('caesarCipher abc', () => { 
    expect(caesarCipher('abc', 3)).toBe('def')
})

test('caesarCipher abc shift factor 4', () => { 
    expect(caesarCipher('abc', 4)).toBe('efg')
})

test('caesarCipher xyz', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('caesarCipher follow lettercase', () => {
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr')
})

test('caesarCipher punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyzeArray average is 4', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe(4)
})

test('analyzeArray min is 1', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toBe(1)
})

test('analyzeArray max is 8', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toBe(8)
})

test('analyzeArray length is 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe(6)
})