const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();
    let sortedArray = arr.sort((a, b) => ((b.yearOfDeath||currentYear)-b.yearOfBirth) - ((a.yearOfDeath||currentYear)-a.yearOfBirth));
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
