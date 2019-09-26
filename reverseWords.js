function reverseWords(string) {
    var wordArray = string.split(" ");
    var newString = "";

    wordArray.forEach((word) => {
        let wordChar = word.split('')
        for (var i = wordChar.length - 1; i >= 0; i--) {
            newString += wordChar[i];
        }
        newString += " "
    })

    return newString
}

// console.log(reverseWords("This is a string of words"));
console.log(reverseWords("Coding Javascript "));