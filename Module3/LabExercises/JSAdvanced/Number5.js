/* 5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected,
but using it from within setTimeout fails. Why? */

let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works

// setTimeout(car.description, 200); //fails
// ANSWER: When we pass a method reference to setTimeout, the 'car' inside the method loses its object context. 'car' becomes undefined , so car.make, car.model etc. are undefined.

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function

setTimeout(() => car.description(), 200);

// b) Change the year for the car by creating a clone of the original and overriding it

let newCar = { ...car, year: 2025};
console.log(newCar); // make: Porsche, model: 911, year: 2025

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// ANSWER: The call uses the original values because the code in a) calls the method on 'car', not on 'newCar'  

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

let boundDescription = car.description.bind(car);

setTimeout(boundDescription, 200); // works without a wrapper function

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let updatedCar = { ...car, model: "Cayenne" };
console.log(updatedCar.model); // Cayenne

// Call the bound description
setTimeout(boundDescription, 200); 