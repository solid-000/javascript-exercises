const repeatString = function(string, times) {
    let result = "";
    if(times<0) result ="ERROR";
    for( i=0; i<times; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
