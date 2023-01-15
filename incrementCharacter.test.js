const incrementCharacter = require('./incrementCharacter')

test('increment each character of a string', () => {
    expect(incrementCharacter("codeacademy")).toMatch("dpefbdbefnz")
})

test('increment each character of a string', () => {
    expect(incrementCharacter("lazyinterns")).toMatch("mbazjoufsot")
})