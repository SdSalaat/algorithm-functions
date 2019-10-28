function flattenArray(array) {
    let flatArray = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j])
        }   
    }
    return flatArray;
}

console.log(flattenArray([[1,4], [3,6], [6,5]]));