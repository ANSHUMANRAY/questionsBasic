function largestEvenNumber(numArray) {
    let ans = -1;
    numArray.forEach(element => {
        if(element % 2 == 0) {
            if(element > ans) ans = element;
        }
    });
    return ans;
}

const largestEvenNumberArrow = (numArray) => {
    let ans = -1;
    numArray.forEach(element => {
        if(element % 2 == 0) {
            if(element > ans) ans = element;
        }
    });
    return ans;
}

console.log(largestEvenNumber([1,2,3,4,5,6,7,8,9]))

module.exports = largestEvenNumber;