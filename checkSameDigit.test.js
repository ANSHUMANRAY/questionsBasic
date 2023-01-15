const checkSameDigit = require('./checkSameDigit');

test("Check number with all same digits", ()=> {
    expect(checkSameDigit(22)).toBe(true);
})

test("Check number with all same digits", ()=> {
    expect(checkSameDigit(23)).toBe(false);
})