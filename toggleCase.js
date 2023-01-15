function toggleCase(str) {
    let ans = "";
    for(let i=0; i<str.length; ++i) {
        if(str[i] >= 'a' && str[i] <= 'z')
            ans += str[i].toUpperCase();
        else if(str[i] >= 'A' && str[i] <= 'Z')
            ans += str[i].toLowerCase();
        else ans += str[i];
    }
    return ans;
}

const toggleCaseArrow = (str) => {
    let ans = "";
    for(let i=0; i<str.length; ++i) {
        if(str[i] >= 'a' && str[i] <= 'z')
            ans += str[i].toUpperCase();
        else if(str[i] >= 'A' && str[i] <= 'Z')
            ans += str[i].toLowerCase();
        else ans += str[i];
    }
    return ans;
}

console.log(toggleCase('This Is A StRing To Be toggLed'))

module.exports = toggleCase;