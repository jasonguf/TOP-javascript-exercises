const sumAll = function(startingNumber, range) {
    if (startingNumber < 0) {
        return "ERROR";
    }

    if (range < 0) {
        return "ERROR";
    }

    if (Number.isInteger(startingNumber) && Number.isInteger(range)) {
        let total = 0;

        if (startingNumber > range) {
            for (let i = 0; i < startingNumber + 1; i++) {
                total = total + i;
            }
        }
        else {
            for (let i = 0; i < range + 1; i++) {
                total = total + i;
            }
        }

        return total;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
