/* 8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
b) Create a new object for a different city with different properties and call your function again with the new object. */

// Reference: JavaScript Fundamentals - page 43

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let category in sydney) { // iterates over each property in the phone object, stores in ‘category’ variable
console.log('Object Property: ' + category); // prints each object property name (category) in turn
console.log('Value / Info: ' + sydney[category]); // prints each object value in turn
}

const adelaide = {
  name: "Adelaide",
  population: 1_470_000,
  state: "SA",
  founded: "28 December 1836",
  timezone: "Australian Central Daylight Time (GMT+10:30)",
};

for (let category in adelaide) {
    console.log('Object Property:' + category),
    console.log('Value / Info:' + adelaide[category])
};