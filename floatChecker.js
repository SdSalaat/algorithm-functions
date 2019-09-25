var input = document.querySelector("#input");
var container = document.querySelector("#container");

function floatChecker (number) {
    var num =  Number(number)
    input.innerHTML = `Input was ${number}`; 
    if(!isNaN(num)) {
        if(num % 1 === 0) return container.innerHTML = "Number is Not float"
        else return container.innerHTML = "Number is Float"
    }
    return container.innerHTML = "Number is invalid"
}

floatChecker((7 * 35.5))