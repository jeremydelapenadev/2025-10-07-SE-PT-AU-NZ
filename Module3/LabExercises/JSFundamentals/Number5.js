// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting);

// function expression syntax

const getGreetingFE = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingFE("Jeremy"));

// arrow function syntax

const getGreetingArrow = (name) => "Hello " + name + "!";

console.log(getGreetingArrow("Jeremy"));

// OR

const getGreetingArrow2 = (name) => console.log("Hello " + name + "!");

getGreetingArrow2("Jeremy2");

// Note: You cannot place a console.log on the body of the arrow function syntax AND AT THE SAME TIME when printing it afterwards, like this:

const getGreetingArrow3 = (name) => console.log("Hello " + name + "!");

console.log(getGreetingArrow3("Jeremy3"));

// This would result to "undefined", as a function that doesn’t return anything always returns undefined in JavaScript.