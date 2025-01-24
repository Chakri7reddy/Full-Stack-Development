// 1. Variable Declarations
let variable1 = 120;   
const constant1 = 15;  

// 2. Function Creation


function addNumbers(a, b) {
    return a + b;
}

const multiplyNumbers = (a, b) => a * b;

// 3. Template Literals


const resultString = `
The sum of ${variable1} and ${constant1} is: ${addNumbers(variable1, constant1)}
The product of ${variable1} and ${constant1} is: ${multiplyNumbers(variable1, constant1)}`;

// Logging the multi-line string to the console
console.log(resultString);
