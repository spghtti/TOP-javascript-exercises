const caesar = function(string, key) {
    let encoded = '';
    let lowerFloor = 96;
    let lowerCeiling = 122;
    let upperFloor = 65;
    let upperCeiling = 90;

    for (i = 0; i < string.length; i++) { // lowercase
        if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {

            if ((string.charCodeAt(i) + key) > lowerCeiling) {
                encoded += String.fromCharCode((((string.charCodeAt(i) + key) - lowerCeiling) % 26) + 96);
                
            } else if ((string.charCodeAt(i) + key) < lowerFloor) {
                encoded += String.fromCharCode((((string.charCodeAt(i) + key) - lowerFloor) % 26) + 122);
             
            } else {
                encoded += String.fromCharCode((string.charCodeAt(i) + key));

            } 

        } else if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) { // uppercase
            
            if ((string.charCodeAt(i) + key) > upperCeiling) {
                encoded += String.fromCharCode((((string.charCodeAt(i) + key) - upperCeiling) % 26) + 64);
                
            } else if ((string.charCodeAt(i) + key) < upperFloor) {
                encoded += String.fromCharCode((((string.charCodeAt(i) + key) - upperFloor) % 26) + 91);
             
            } else {
                encoded += String.fromCharCode((string.charCodeAt(i) + key));
            }

        } else {
            encoded += String.fromCharCode(string.charCodeAt(i));
        }
    }
    return encoded;
}

module.exports = caesar
