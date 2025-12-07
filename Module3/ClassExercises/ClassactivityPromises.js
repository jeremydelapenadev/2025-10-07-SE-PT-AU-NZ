/* async function asyncFunctionDeclaration() { ... } // function declaration syntax

const asyncFunctionExpression = async function() { ... } // function expression syntax

const asyncFunctionArrow = async () => { ... } // arrow function syntax */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Task 1: Create 6 JS functions which print the pizza processing statements and call those functions in sequence. Use a mix of function declarations, expressions and arrow functions.
function preparePizza() {
  console.log("Started preparing pizza ..."); // Function Declaration
};

function makeBase() {
  console.log("Made the base"); // Function Declaration
};

const addSauceAndCheese = function() {
  console.log("Added the sauce and cheese"); // Function Expression
};

const addToppings = () => { console.log("Added the pizza toppings") }; // Arrow Function

const cookPizza = function() {
  console.log("Cooked the pizza") };// Function Expression

const pizzaReady = () => console.log("Pizza is ready!"); // Arrow Function


/* preparePizza();
makeBase();
addSauceAndCheese();
addToppings();
cookPizza();
pizzaReady(); */


// Task 2: Make the functions asynchronous by using setTimeout with different time durations, maintaining the right order.
// Task 3: Modify the asynchronous functions to use Promises and achieve the required result.
new Promise(resolve => setTimeout(() => resolve(), 1000)
).then(() => {
  preparePizza();
  return new Promise(resolve => setTimeout(() => resolve(), 2000)
  );
}).then(() => {
  makeBase();
  return new Promise(resolve => setTimeout(() => resolve(), 1500)
  );
}).then(() => {
  addSauceAndCheese();
  return new Promise(resolve => setTimeout(() => resolve(), 2000)
  );
}).then(() => {
  addToppings();
  return new Promise(resolve => setTimeout(() => resolve(), 4000)
  );
}).then(() => {
  cookPizza();
  return new Promise(resolve => setTimeout(() => resolve(), 1500)
  );
}).then(() => {
  pizzaReady();
});

// Task 4: Modify the functions to use async/await and achieve the required result. Also defining steps inside one function.
// Answer from ChatGPT. Still reviewed.

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function makePizza() {
  await wait(1000);
  preparePizza();

  await wait(2000);
  makeBase();

  await wait(1500);
  addSauceAndCheese();

  await wait(2000);
  addToppings();

  await wait(4000);
  cookPizza();

  await wait(1500);
  pizzaReady();
}

makePizza();