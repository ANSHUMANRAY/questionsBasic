function largestString(strArray) {
    let maxLength =0;
    let ans = "";
    strArray.forEach(element => {
        if(element.length > maxLength) {
            maxLength = element.length;
            ans = element;
        }
    });
    return ans;
}

const largestStringArray = (strArray) => {
    let maxLength =0;
    let ans = "";
    strArray.forEach(element => {
        if(element.length > maxLength) {
            maxLength = element.length;
            ans = element;
        }
    });
    return ans;
}

console.log(largestString(["we", "love", "code", "academy"]));

module.exports = largestString;