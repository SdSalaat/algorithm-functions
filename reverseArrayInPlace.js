function reverseArrayInPlace (arr) {
    for(var i=0; i<arr.length / 2; i++){
        var tempVar = arr[i];
        arr[i] = arr[arr.length -1 - i]
        arr[arr.length -1 - i] = tempVar;
    }
    console.log(arr);
}


reverseArrayInPlace(['This', "is", "some", "array"]);