let findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    const oldest = people.sort(function(a, b) {
        if (!a.hasOwnProperty('yearOfDeath')) {
            const lastGuy = currentYear - a.yearOfBirth;
            const nextGuy = b.yearOfDeath - b.yearOfBirth;
            return lastGuy > nextGuy ? -1 : 1;

        } else if (!b.hasOwnProperty('yearOfDeath')) {
            const lastGuy = a.yearOfDeath - a.yearOfBirth;
            const nextGuy = currentYear - b.yearOfBirth;
            return lastGuy > nextGuy ? -1 : 1;
            
        } else {
            const lastGuy = a.yearOfDeath - a.yearOfBirth;
            const nextGuy = b.yearOfDeath - b.yearOfBirth;
            return lastGuy > nextGuy ? -1 : 1;
        }
    });
    return oldest[0];
}
module.exports = findTheOldest