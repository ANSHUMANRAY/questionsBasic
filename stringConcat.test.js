const stringConcat = require('./stringConcat')

test('Concat 2 strings', () => {
    expect(stringConcat(["code", "academy"])).toMatch('odecademy');
})