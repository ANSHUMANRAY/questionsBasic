const stringScript = require('./stringScript')

test('Check if String Script is present', () => {
    expect(stringScript('javaScript')).toBe(true);
})