// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 8,
  b = 9;
let result = `${a} + ${b} is `;

/*if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
} 

console.log(result); */

(a + b < 10) ? console.log(result += "less than 10") : console.log(result += "greater than 10");

// += is an addition assignment
// for example, x += y is equivalent to x = x + y, except that the expression x is only evaluated once.
// in the example above, x = result, while y = "less than 10"
// it will get the data from the result (`${a} + ${b} is`) then add it to the string "less than 10"

console.log("-----Additional Info for Future Reference-----")

// difference between using + and =+
// += modifies the variable
// + does not modify the variable

// Reset
result = `${a} + ${b} is `;

// Version 1: Using +=
console.log(result += "greater than 10");  // modifies result
console.log(result);               // prints the modified value

// Reset
result = `${a} + ${b} is `;

// Version 2: Using +
console.log(result + "greater than 10");   // does NOT modify result
console.log(result);               // prints the original value