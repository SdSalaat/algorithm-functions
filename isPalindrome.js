function isPalindrome (string) {
    var charactersArray = string.toLowerCase().split("");
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var validLetters = [];

    charactersArray.forEach(letter => {
        if(validCharacters.indexOf(letter) > -1) validLetters.push(letter)
    })
    return validLetters.join('') === validLetters.reverse().join('')
}

console.log(isPalindrome("race cars"));