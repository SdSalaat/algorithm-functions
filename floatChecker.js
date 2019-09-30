// Requirement: from the given number check weather its float or not

var input = document.querySelector("#input");
var container = document.querySelector("#container");

function floatChecker (number) {
    // variable declaration
    var num =  Number(number)

    // inserting input value to html
    input.innerHTML = `Input was ${number}`; 
    if(!isNaN(num)) {
        // checking if num is divisible by 1 and inserting output to html
        if(num % 1 === 0) return container.innerHTML = "Number is Not float"
        // inserting input value to html
        else return container.innerHTML = "Number is Float"
    }
    // inserting output to html
    return container.innerHTML = "Number is invalid"
}

floatChecker((7 * 35.5))