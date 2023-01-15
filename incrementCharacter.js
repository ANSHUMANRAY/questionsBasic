function incrementCharacter(str) {
    let ans = "";
    for(let i =0; i<str.length; ++i) {
        let char = str[i];
        if(char == 'z') {
            ans += 'a';
            continue;
        }
        ans += String.fromCharCode(char.charCodeAt(0)+1);
    }
    return ans;
}

const incrementCharacterArrow = (str) => {
    let ans = "";
    for(let i =0; i<str.length; ++i) {
        let char = str[i];
        if(char == 'z') {
            ans += 'a';
            continue;
        }
        ans += String.fromCharCode(char.charCodeAt(0)+1);
    }
    return ans;
}

console.log(incrementCharacter('abcz'));

module.exports = incrementCharacter;