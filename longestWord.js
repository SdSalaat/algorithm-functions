function longestWord(sentence) {
    sentence = sentence.split(" ");
    let words = [];
    let length = 0;
    sentence.forEach(word => {
        if(word.length > length){ 
            length = word.length
            words = [word];
        } else if(word.length == length){ 
                words.push(word);
        }
    });
    return words.length > 1 ? words: words[0]
}

console.log(longestWord("never wanted to leave"));