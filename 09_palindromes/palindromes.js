const palindromes = function (str) {
    let arr = (Array.from(str)).filter(char => char != " " && char != "." && char != "," && char != "!");
    let revStr = arr.toReversed().join("");
    let original = arr.join("");
    console.log(revStr)
    console.log(original)
    return (original.toLowerCase() === revStr.toLowerCase()) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
