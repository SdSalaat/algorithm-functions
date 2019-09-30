// Requirement: from the given array calculate mean median and modde

function mean(array) {
    var sum = 0;
    array.forEach(number => {
        sum += number;
    });

    return Number((sum / array.length).toFixed(2));
}

function median(array) {
    array = array.sort();
    if (array.length % 2 === 0) {
        let median = array[(array.length / 2) - 1] + array[array.length / 2];
        return median / 2;
    }
    return array[Math.floor(array.length / 2)];
}

function mode(array) {
    let obj = {};
    let mostRepeatedNumber = 0;
    greatestVal = 0;
    array.forEach((number, i) => {
        if (obj[number] === undefined) obj[number] = 0;
        obj[number]++;
        if (obj[number] > greatestVal) {
            greatestVal = obj[number]
            mostRepeatedNumber = number;
        }

    });
    return greatestVal === 1 ? 'No Mode' : mostRepeatedNumber;
}


function meanMedianMode(array) {
    return {
        mean: mean(array),
        median: median(array),
        mode: mode(array)
    }
}

console.log(meanMedianMode([12, 16, 65, 48, 19, 15, 15]))