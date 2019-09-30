// Requirement: loop through the given number and
// if number is multiple of 3 return "fizz"
// if number is multiple of 5 return "Buzz"
// if number is multiple of 3 and 5 return "fizzBuzz"

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log("FizzBuzz")
        else if (i % 3 === 0) console.log("Fizz")
        else if (i % 5 === 0) console.log("Buzz")
        else console.log(i)
    }
}

FizzBuzz(15)