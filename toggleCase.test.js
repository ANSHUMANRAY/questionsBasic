const toggleCase = require("./toggleCase");

test("Toggle case the String", ()=> {
    expect(toggleCase('MeRRy hAD a LITTle lAMp')).toBe("mErrY Had A littLE LamP")
})