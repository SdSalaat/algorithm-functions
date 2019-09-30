// Requirement: from the given array find out which two elements are making sum that is given

function addTwoSum(array, sum) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        let counterpart = sum - array[i];
        if(array.indexOf(counterpart) !== -1){
            result.push([counterpart , array[i]].sort());
        }
    }
    return result
};


console.log(addTwoSum([1, 6, 4, 5, 3, 3], 7));