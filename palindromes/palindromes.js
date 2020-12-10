const palindromes = function(words) {
    let lowerWords = words.toLowerCase();
    let newWords = '';
        for (i = 0; i < lowerWords.length; i++) { // converts original string into all lower alphabetic characters
            if ((lowerWords.charCodeAt(i) > 96) && (lowerWords.charCodeAt(i) < 122)) {
                console.log(lowerWords[i]);
                newWords += lowerWords[i];
        }
    }
    let backwards = '';

    for (i = newWords.length; i > - 1; i--) { // writes the string backwards
        if ((newWords.charCodeAt(i) > 96) && (newWords.charCodeAt(i) < 122)) {
            backwards += newWords[i];
        }
        
    }
    console.log(backwards); { // Compares the two strings
            return true;
        } else {
            return false;
        }
}

module.exports = palindromes
