const checkLeapYear = require('./checkLeapYear')

test('Check if the year is leap year', ()=> {
    expect(checkLeapYear(2000)).toBe(true);
})