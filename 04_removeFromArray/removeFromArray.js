const removeFromArray = function(...args) {
    let argumentSize = args.length;

    let array = args[0];

    for (let i = 1; i < args.length; i++) {
        let removed = false;

        while (removed == false) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == args[i]) {
                    array = array.filter(element => element !== args[i]);
                    removed = true;
                    break;
                }
            }

            removed = true;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
