// 8. Using the following starter code, create a decorator function to validate function arguments as strings. Test it by decorating the given orderItems function below.

 /* function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error

// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not

/*
function validateStringArg(fn) {
  return function(arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string");
    }
    return fn(arg);
  };
}

function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems); // decorate

console.log(validatedOrderItem("Apple Watch")); // works
// console.log(validatedOrderItem(123)); // throws Error
*/

// b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string

/*
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

console.log(orderItems("Apple Watch", "iPhone")); // "Order placed for: Apple Watch, iPhone"
*/

// c) Extend the decorator function to validate as strings all arguments passed to fn

/*
function validateStringArg(fn) {
  return function(...args) {
    args.forEach(arg => {
      if (typeof arg !== "string") {
        throw new Error("All arguments must be strings");
      }
    });
    return fn(...args);
  };
}

const validatedOrderItem = validateStringArg(orderItems); // decorate

console.log(validatedOrderItem("Apple Watch", "iPhone")); // works
// console.log(validatedOrderItem("Apple Watch", 123)); // throws Error
*/

// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments

/*
try {
  console.log(validatedOrderItem("Apple Watch", "iPhone")); // works
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItem("Apple Watch", 123)); // throws
} catch (error) {
  console.error("Caught error:", error.message);
}
*/

/////////

function validateStringArg(fn) {
  return function(...args) {
    args.forEach(arg => {
      if (typeof arg !== "string") {
        throw new Error("All arguments must be strings");
      }
    });
    return fn(...args);
  };
}

function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
  console.log(validatedOrderItem("Apple Watch", "iPhone"));
  console.log(validatedOrderItem("Apple Watch", 123));
} catch (error) {
  console.error("Caught error:", error.message);
}

/* What will be printed--

Order placed for: Apple Watch, iPhone
Caught error: All arguments must be strings 

*/