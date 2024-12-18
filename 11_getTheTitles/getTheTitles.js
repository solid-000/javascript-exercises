const getTheTitles = function(bookArray) {
    let titleArray = bookArray.map(prop => prop.title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
