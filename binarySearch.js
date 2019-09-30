function binarySearch(array, key) {
    array = array.sort()
    let middleIndex = Math.floor(array.length / 2),
        middleValue = array[middleIndex];

    if (middleValue === key) return true;
    else if (middleValue < key) {
        return binarySearch(array.slice(middleIndex, array.length), key)
    } else if (middleValue > key) {
        return binarySearch(array.slice(0, middleIndex), key)
    } else return false;

}


console.log(binarySearch([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80], 75));