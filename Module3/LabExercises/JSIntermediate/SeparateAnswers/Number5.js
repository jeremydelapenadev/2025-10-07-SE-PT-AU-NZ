// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code returns the wrong answer
// ANSWER: When using "toFixed()", it returns a string, and not a number. So when it's run on the console, it concatenates 'fixedTwenty' and 'fixedTen', hence "0.200.10"


// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    const twoDecimals = 100; // 2 decimal places
    return (Math.round(float1 * twoDecimals) + Math.round(float2 * twoDecimals)) / twoDecimals;
}

console.log(currencyAddition(0.2, 0.1)); // 0.3
console.log(0.3 == currencyAddition(0.2, 0.1)); // true

/* c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *)
on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation) {
    const twoDecimals = 100; // 2 decimal places
    const num1 = Math.round(float1 * twoDecimals);
    const num2 = Math.round(float2 * twoDecimals);
    let result;

    switch(operation) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = (num1 * num2) / twoDecimals;
            // for multiplication, multiply first then divide by 100
            break;
        case '/': result = num1 / num2;
            // for division, divide numbers first then multiply by twoDecimals
            break;
    }

    return result / twoDecimals; // convert back to decimal
}

console.log(currencyOperation(0.2, 0.1, '+')); // 0.3
console.log(currencyOperation(0.3, 0.1, '-')); // 0.2
console.log(currencyOperation(0.3, 0.3, '*')); // 0.2
console.log(currencyOperation(0.3, 0.2, )); // NaN

/* d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below: */

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
    const twoDecimals = Math.pow(10, numDecimals);
    const num1 = Math.round(float1 * twoDecimals);
    const num2 = Math.round(float2 * twoDecimals);
    let result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = Math.round((num1 * num2) / twoDecimals);
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error('Invalid operation');
    }

    return result / twoDecimals;
}

console.log(currencyOperationExtended(0.1234, 0.5678, '+', 4)); // 0.6912
console.log(currencyOperationExtended(0.1, 0.2, '+'));           // 0.3 (default 2 decimals)
console.log(currencyOperationExtended(0.1, 0.2, '+', 10));       // 0.3

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

