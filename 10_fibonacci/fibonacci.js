const fibonacci = function(n) {
    if (n === 0 || n === "0") {
        return 0;
    }

    if (n < 0) {
        return "OOPS";
    }

    let fibSequence = [1, 1];

    if (typeof n === "string") {
        let number = parseInt(n, 10);
        n = number;
    }

    //if (n % )

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
