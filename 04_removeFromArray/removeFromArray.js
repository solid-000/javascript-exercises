const removeFromArray = function() {
    for(let i=1; i<arguments.length; i++){
        for(let j=0; j<arguments[0].length; j++){
            if(arguments[i] === arguments[0][j]){
                delete arguments[0][j];
            }
        }
    }
    arguments[0] = arguments[0].filter((a) => a != undefined);
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
