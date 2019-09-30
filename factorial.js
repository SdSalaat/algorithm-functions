// Requirement: from the given number calculate factorial.
// e.g. if 4 is given as parameter 4 x 3 x 2 x 1 = 24 should be returned

function factorial(number) {
    if(number <= 2) return number
     else return number * factorial(number -1);
}

console.log(factorial(1));