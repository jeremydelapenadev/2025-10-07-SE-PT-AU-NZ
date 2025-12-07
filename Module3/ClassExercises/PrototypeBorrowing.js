// define our own join() function for objects
const obj = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};

obj.join = Array.prototype.join;

console.log(obj.join(","));

// only works if the syntax is presented as an array (e.g., 0, 1)
