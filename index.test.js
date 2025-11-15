import { capitalize, reverseString} from "./index";

test('capitalize Bakuretsu', () => {
    expect(capitalize('bakuretsu')).toBe('Bakuretsu')
})

test('reverse bakuretsu', () =>{
    expect(reverseString('bakuretsu')).toBe('usterukab')
})