async function makePizza() {

  // --- All steps defined inside one function ---
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const preparePizza = () => console.log("Started preparing pizza ...");
  const makeBase = () => console.log("Made the base");
  const addSauceAndCheese = () => console.log("Added the sauce and cheese");
  const addToppings = () => console.log("Added the pizza toppings");
  const cookPizza = () => console.log("Cooked the pizza");
  const pizzaReady = () => console.log("Pizza is ready!");


  // --- Smooth async flow ---
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