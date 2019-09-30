function bubbleSort(array) {
    let isChanged = false;

    array.forEach((element, i) => {
        if (array[i + 1] !== undefined && element > array[i + 1]) {
            isChanged = true;
            let val = array[i];
            array[i] = array[i + 1];
            array[i + 1] = val
        }
    });
    if (isChanged) bubbleSort(array)
    else return console.log(array);
}

bubbleSort([6000, 34, 203, 3, 746, 200, 984, 1, 198, 764, 9, 1])