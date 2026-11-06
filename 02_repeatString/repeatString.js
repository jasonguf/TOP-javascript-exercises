const repeatString = function(theWord, theNum) {
    let word = theWord;
    let num = theNum;
    let returnedString = "";

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        returnedString = returnedString + word;
    }

    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
