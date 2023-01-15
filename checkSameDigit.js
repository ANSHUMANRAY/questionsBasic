function checkSameDigit(num) {
    let digit = num % 10;
    let dup = num;
    while(dup > 0) {
        if(parseInt(dup % 10) != digit) return false;
        dup = parseInt(dup/10);
    }
    return true;
}

const checkSameDigitArrow = (num) => {
    let digit = num % 10;
    let dup = num;
    while(dup > 0) {
        if(parseInt(dup % 10) != digit) return false;
        dup = parseInt(dup/10);
    }
    return true;
}
console.log(checkSameDigit(22));
console.log(checkSameDigit(23));

module.exports = checkSameDigit;