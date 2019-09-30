function addTwoSum(array, sum) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        let counterpart = sum - array[i];
        if(result.length > 0) console.log([
            result[result.length -1].indexOf(counterpart) === -1 ? null : counterpart,
            result[result.length -1].indexOf(array[i]) === -1 ? null : array[i]
        ].sort())
        if(array.indexOf(counterpart) !== -1){
            result.push([counterpart , array[i]].sort());
        }
    }
    return result
};


console.log(addTwoSum([1, 6, 4, 5, 3, 3], 7));