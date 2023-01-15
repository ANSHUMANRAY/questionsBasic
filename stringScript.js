function stringScript(str) {
    if(str.slice(-6) === 'Script') return true;
    else return false;
}

const stringScriptArrow = (str) => (str.slice(-6) === 'Script') ? true : false;

console.log(stringScript('javascript'))
console.log(stringScriptArrow('javaScript'))

module.exports = stringScript;