const reverseString = function(theWord) {
    let word = theWord;
    let returnedString = "";
    
    for (let i = word.length - 1; i >= 0; i--) {
        returnedString = returnedString + word[i];
    }

    return returnedString;
};

// Do not edit below this line
module.exports = reverseString;
