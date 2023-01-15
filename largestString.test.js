const largestString = require('./largestString')

test('Find Largest String', ()=>{
    expect(largestString(["we", "love", "code", "academy"])).toMatch("academy")
})