const largestEvenNumber = require('./largestEvenNumber');

test ("Find Lagest Even Number", ()=>{
    expect(largestEvenNumber([1,2,3,4,5,6,7,8,9])).toBe(8);
})
test("Find Largest Even Number", () => {
    expect(largestEvenNumber([1,3,5,7])).toBe(-1)
})