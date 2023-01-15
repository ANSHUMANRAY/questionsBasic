const countVowels = require('./countVowels')

test('count number of vowels in the string', () => {
    expect(countVowels('codeacademy')).toBe(5);
})