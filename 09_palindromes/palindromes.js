const palindromes = function (string) {
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reversedString = cleanedString.split("").reverse().join("");

    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
