// Requirement: from the given array sort array recursively

function mergeSort (array) {
    if(array.length < 2) return array;
    let middleIndex = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, middleIndex);
    let secondHalf = array.slice(middleIndex);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge (array1, array2) {
    let result = [];
    while(array1.length && array2.length){
        let minElem;
        if(array1[0] < array2[0]) minElem = array1.shift()
        else minElem = array2.shift()
        result.push(minElem);
    }
    if(array1.length) result = result.concat(array1)
    else result = result.concat(array2)
    return result;
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 1, 198, 764, 9]))