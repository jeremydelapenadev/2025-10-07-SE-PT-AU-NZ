// this function returns the sum of two numbers
function sum(a, b) {
}
// Create the Test
if (sum(2, 4) != 6) {
throw new Error('Test failed');
}
// Write the Code
function sum(a, b) {
return a + b;
}

// Specification for Multiply
function Multiply (a,b) {}

if(Multiply(3,4) !=12) {
    throw new Error("Test Failed");
}

function Multiply(a, b){
    return a/b; // this is the error
}

console.log('All tests passed.');