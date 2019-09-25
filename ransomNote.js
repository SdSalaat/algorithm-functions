// var input = document.querySelector("#input");
// var container = document.querySelector("#container");

function ransomNote (textNote, magzineText) {
    var textArray = textNote.toLowerCase().split(" ");
    var magzineArray = magzineText.toLowerCase().split(" ");
    var magzineObj = {};
    var isSecret = true

    magzineArray.forEach(word => {
        if(!magzineObj[word]) magzineObj[word] = 0;
        magzineObj[word]++;
    });


    textArray.forEach(word => {
        if(magzineObj[word]){
            magzineObj[word]--;
            if(magzineObj[word] < 0 ) isSecret = false;
        } else isSecret = false;
        
    })

    console.log(isSecret ? "Ransome Secret Found" : "Nothing found in the magzine");
}

ransomNote("Some text", "this is some text some this is some text some this is some text some this is some text some this is some text some this is some text some this is some text some this is some text some this is some text some");