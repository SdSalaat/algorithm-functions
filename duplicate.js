var input = document.querySelector("#input");
var container = document.querySelector("#container");
function duplicateArray(array) {
    // variable declaration
    var obj = {};
    var dups = [];

    // loop on input
    array.forEach(el => {
        // assigning default value to 0
        if (obj[el] === undefined) obj[el] = 0

        // incrementing values if found on same object key
        obj[el]++;

        // pushing duplicate to array
        // whom object key values are greater than 1
        if (obj[el] > 1 && dups.indexOf(el) === -1) dups.push(el)
    });

    // return object
    input.innerHTML = `Input array was : ${array}`;
    container.innerHTML = `Duplicates are : ${dups}`;
}


console.log(duplicateArray([1, 1, 2, 3, 4, 5, 6, 1, 2]));
