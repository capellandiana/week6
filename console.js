// very easy
let roosters = 9
let hens = 5
console.log (roosters - hens)

// easy
const var1 = "Jonathan"
const var2 = "Juan"
let shorterName = var1.length < var2.length ? var1 : var2
let longerName = var1.length > var2.length ? var1 : var2
let lengthDifference = Math.abs(var1.length - var2.length)
    console.log (`The name ${shorterName} is shorter that ${longerName} by ${lengthDifference} characters`)

// medium 
let userInput = prompt("Please enter text here", "ARE YOU SHOUTING");
if (userInput === userInput.toUpperCase()) {
    console.log("YOU ARE SHOUTING")
}
else if (userInput === userInput.toLowerCase()) {
    console.log("you are wispering")
}
else {
    console.log("You Are Talking Normally")
}

// hard 
function add(number, other)
{console.log("Answer is:", number + other)
}
add(5,5)

function subtract(option, option2)
{console.log("Answer is:", option - option2)
}
subtract(6,4)

function multiply(enter, enter2)
{console.log("Answer is:", enter * enter2)
}
multiply(7,8)

function divide(div, div2)
{console.log("Answer is:", div / div2)
}
divide(21,3)

// very hard 
let number = parseInt(prompt("Calculator:", "type first number here"));
let operator = prompt("Calculator", "Enter operator");
let number2 = parseInt(prompt("Calculator", "type second number here"));
let result;
if (operator == '+') {
    result = number + number2;
}
else if (operator == '-') {
    result = number - number2;
}
else if (operator == '*') {
    result = number * number2;
}
else {
    result = number / number2;
}
console.log (`${number} ${operator} ${number2} = ${result}`);

