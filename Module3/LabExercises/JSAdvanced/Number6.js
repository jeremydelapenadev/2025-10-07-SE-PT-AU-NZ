// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.

/* function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters

// Step 1: Add delay to Function prototype
 Function.prototype.delay = function(ms) {
  const originalFunc = this; // the function being delayed
  return function(a, b) {
    setTimeout(() => {
      originalFunc(a, b);
    }, ms);
  };
};

// Example function
function multiply(a, b) {
  console.log(a * b);
}

// Test
multiply.delay(500)(5, 5); // prints 25 after 500ms

// b) Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay = function(ms) {
  const originalFunc = this;
  return function(...args) {         // collect any number of arguments
    setTimeout(() => {
      originalFunc.apply(this, args); // call with original context and args
    }, ms);
  };
};

// Test with 2 parameters
multiply.delay(500)(6, 7); // prints 42 after 500ms

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

// Test with delay
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500ms */

////////

// Extend Function prototype
Function.prototype.delay = function(ms) {
  const originalFunc = this;
  return function(...args) {
    setTimeout(() => {
      originalFunc.apply(this, args);
    }, ms);
  };
};

// Test functions
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

// Delayed calls
multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500ms
multiply.delay(1000)(1, 2, 3, 4); // prints 24 after 1000ms