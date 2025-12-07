let animal = {
  eats: true,
  sleeps: true,
  legs: 4,
  mammal: true,
}; // inherits from Object prototype

console.log(animal);
console.log(Object.getPrototypeOf(animal));

console.log(Object.getOwnPropertyNames(animal));

let rabbit = {
  jumps: true,
};

Object.setPrototypeOf(rabbit, animal); // this will inherit rabbit from animal

console.log(
  `It is ${rabbit.jumps} that the rabbit jumps; ${rabbit.eats} that it eats; ${rabbit.sleeps} that it sleeps; and it has ${rabbit.legs} legs.`
);

console.log(Object.getPrototypeOf(rabbit));

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)));

//

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});

// for... in loop
for (let prop in rabbit) console.log(`${prop} is ${rabbit[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

// if enumerable is set to false, "jumps" will not be printed under rabbit2 --> hide so it won't be shown in the logs

// using constructor function
function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)

let whiteRabbit = new Rabbit("White rabbit");
let blackRabbit = new Rabbit("Black rabbit");

for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties
for (let prop in blackRabbit) console.log(`${prop} is ${blackRabbit[prop]}`); // all properties
