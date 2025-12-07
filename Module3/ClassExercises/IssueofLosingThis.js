const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}!`);
  },
};
// user.sayHi(); // called directly, works! Hi, John
setTimeout(user.sayHi, 1000); // passed as reference, fails! Hi, undefined; no need for third parameter cos there's no argument in sayHi()

// SOLUTION 1: Wrap it inside a function

setTimeout(() => user.sayHi(), 2000);

// SOLUTION 2: Explicity bind the right "context" into the function reference.

const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
setTimeout( boundSayHi, 1000 ) // works! Hi, John