const sumAll = function(num1, num2) {
    let sum = 0;
    if(!(Number.isInteger(num1)) || typeof num1 === "object" || typeof num1 === "string" || num1 < 0 ||
    !(Number.isInteger(num2)) || typeof num2 === "object" || typeof num2 === "string" || num2 < 0 ){
    return "ERROR";
    }
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for(let i=num1; i<=num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
