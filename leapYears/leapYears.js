const leapYears = function(givenYear) {
    if (Number.isInteger(givenYear / 4)) {
        if (Number.isInteger(givenYear / 100) && Number.isInteger(givenYear / 400)) {
            return true;
        }
        if (Number.isInteger(givenYear / 100)) {
            return false;
        }
        return true;
        }

    return false;
    }


module.exports = leapYears
