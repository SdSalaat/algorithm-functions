function ceaserCipher(string, number) {
    number = number % 26;
    var stringLowerCase = string.toLowerCase().split("");
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var ciphered = "";

    for (var i = 0; i < stringLowerCase.length; i++) {
        var character = stringLowerCase[i]
        if (character === " ") {
            ciphered += character;
            continue;
        }
        let currentIndex = alphabets.indexOf(character)
        let newIndex = currentIndex + number;
    
        if(newIndex > 25) newIndex = newIndex - 26
        if(newIndex < 0) newIndex = 26 + newIndex 
        ciphered += alphabets[newIndex]
    }
    return ciphered
}

console.log(ceaserCipher("abdul Samad", 2) + " ---> " + ceaserCipher(ceaserCipher("abdul Samad", 2), -2))