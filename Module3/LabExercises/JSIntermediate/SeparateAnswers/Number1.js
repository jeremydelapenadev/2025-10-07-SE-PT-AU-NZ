/* 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below.
Test it with different strings. */

// Reference: Pages 18-19

/* const string = "los angeles"

console.log(ucFirstLetters(string) ) // "ucFirstLetters is not defined" */

function ucFirstLetters(string) {
  return string
    .split(" ") // separate the words in an array
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // map for running a function on each item in the array + slice restarts the rest of the string from index 1
    .join(" "); // turn the array back into a string
}

console.log(ucFirstLetters("los angeles"));  // "Los Angeles"
console.log(ucFirstLetters("united states of america")) // "United States of America
console.log(ucFirstLetters("institute of data - sofware engineering")) // Insititute of Data - Software Engineering