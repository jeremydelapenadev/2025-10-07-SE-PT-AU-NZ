/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a dash. */

// Reference: Page 37

function camelCase(cssProp) {
  return cssProp
    .split("-") // separate the words (in between the dash) in an array, while removing the dash
    .map((word, index) => index === 0 // "===" same value and type
        ? word // first word stays lowercase
        : word.charAt(0).toUpperCase() + word.slice(1)
            // word.charAt(0) -> first letter
            // .toUpperCase() -> make it uppercase
            // word.slice(1) -> the rest of the letters remain the same
    )
    .join(""); // join the array into a string
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// b) Create variants of the camelCase function that use different types of for loops
// c) with and without the conditional operator

// for loop (without conditional operator)

function camelCaseForLoop(cssProp) {
  const parts = cssProp.split('-');
  let result = parts[0]; // first word stays unchanged

  for (let i = 1; i < parts.length; i++) { // start at index 1; the loop runs while 'i' is less than the number of parts (i.e., background Image = 2) -- only runs once
    const word = parts[i]; // image
    result += word.charAt(0).toUpperCase() // "I" in Image ; += combines and appends to the result
    + word.slice(1); // lowercase "mage" in Image
  }
  
  return result;
}

console.log(camelCaseForLoop('background-image')); // backgroundImage

// for ... of loop (with conditional operator)

function camelCaseForOf(cssProp) {
  let result = '';
  let isFirst = true; // first word stays lowercase, every next word is capitalised

  for (const word of cssProp.split('-')) { // loops through each value one by one (no indexes)
    result += isFirst // concatenates the first word (margin, staying lowercase) with the second word (with the modification below)
      ? word // first word stays as is
      : word.charAt(0).toUpperCase() + word.slice(1); // modifies the second value

    isFirst = false;
  }

  return result;
}

console.log(camelCaseForOf('margin-right')); // marginRight

// forEach loop (with conditional operator)

function camelCaseForEach(cssProp) {
  const parts = cssProp.split('-'); // splits into array
  let result = ''; // start to build camelCase

  parts.forEach((word, index) => { // calls back each element of the array
    result += index === 0
      ? word
      : word.charAt(0).toUpperCase() + word.slice(1);
  });

  return result;
}

console.log(camelCaseForEach('border-radius')); // borderRadius