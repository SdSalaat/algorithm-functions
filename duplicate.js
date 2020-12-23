// Requirement: from the given array pluck out the duplicates


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
        // whom object key values are equal to 2
        if (obj[el] === 2 ) dups.push(el)
    });

    return dups;
}


console.log(duplicateArray([2,1,3,2,4.2,4,2,1,3,5,2,6,7,8,6,9]));
