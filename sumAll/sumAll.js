const sumAll = function(value1, value2) {
    let finalSum = 0;
    if (typeof value1 != 'number' || typeof value2 != 'number') return 'ERROR';
    if (value1 < 0 || value2 < 0) return 'ERROR';
    if (value1 < value2) {
        for (i = value1; i <= value2; i++) {
            finalSum += i;
        }
    } else {
        for (i = value2; i <= value1; i++) {
            finalSum += i;
        }
    }
    return finalSum;
}


module.exports = sumAll
