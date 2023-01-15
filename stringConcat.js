function stringConcat(strArray) {
    return strArray[0].slice(1) + strArray[1].slice(1);
}

const stringConcatArrow = (strArray) => strArray[0].slice(1) + strArray[1].slice(1);

console.log(stringConcat(['code', 'academy']));

module.exports = stringConcat;