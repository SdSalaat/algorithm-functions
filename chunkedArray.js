function chunkedArray(array, length) {
    let chunked = [];
    while (array.length > length) {
        let sliced = array.splice(0, length);
        chunked.push(sliced)
    }
    chunked.push(array.splice(0, array.length));
    return chunked;
    
}

console.log(chunkedArray([1, 3, 5, 6, 7, 8, 5, 4, 2, 4, 6, 7, 8], 4));