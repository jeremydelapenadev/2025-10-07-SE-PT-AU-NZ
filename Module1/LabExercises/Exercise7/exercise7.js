// ADDITION
// this function returns the sum of two numbers
function sum(a, b) {
}

// Unit Testing #1
if (sum(2, 4) != 6) {
throw new Error('Test for addition unit testing #1 failed.');
}

// Unit Testing #2
if (sum(-4, .5) != -3.5) {
throw new Error('Test for addition unit testing #2 failed.');
}

// Unit Testing #3
if (sum(21, 17) != 38) {
    throw new Error ('Test for addition unit testing #3 failed.');
} else { console.log('Addition unit testings succeeded.');
}

// Write the Code
function sum(a, b) {
    return a + b;
}

// SUBTRACTION
// this function returns the difference of two numbers
function subtract(a, b) {
}

// Unit Testing #1
if (subtract(10, 4) != 6) {
throw new Error('Test for subtraction unit testing #1 failed.');
}

// Unit Testing #2
if (subtract(-8, 22) != -30) {
throw new Error('Test for subtraction unit testing #2 failed.');
}

// Unit Testing #3
if (subtract(5.4, 2.1) == 3.3) {
    throw new Error ('Test for subtraction unit testing #3 failed.');
} else { console.log('Subtraction unit testings succeeded.');
}

// Write the Code
function subtract(a, b) {
    return a - b;
}

//MULTIPLICATION
// this function returns the product of two numbers
function multiply(a,b) {
}

// Unit Testing #1
if (multiply(5,4) !=20) {
    throw new Error("Test for multiplication unit testing #1 failed.");
}

// Unit Testing #2
if (multiply(10,0.5) != 5) {
    throw new Error("Test for multiplication unit testing #2 failed.");
}

// Unit Testing #3
if (multiply(10,0.5) != 5) {
    throw new Error ('Test for multiplication unit testing #3 failed.');
} else { console.log('Multiplication unit testings succeeded.');
}

// Write the Code
function multiply(a,b) {
    return a*b;
}

//DIVISION
// this function returns the quotient of two numbers
function divide(a,b) {
}

// Unit testing #3
if (divide(16.4,4.1) != 4) {
    throw new Error("Test for division unit testing #1 failed.");
}

// Unit testing #2
if (divide(-20,-5) != 4) {
    throw new Error("Test for division unit testing #2 failed.");
}

// Unit testing #3
if (divide(16.4,4.1) != 4) {
    throw new Error ('Test for division unit testing #3 failed.');
} else { console.log('Division unit testings succeeded.');
}

// Write the Code
function divide(a,b) {
    return a/b;
}

console.log ("All tests passed.");