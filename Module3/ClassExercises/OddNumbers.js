function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise

function getListofOddNumbers() {
  // define a function without parameter "()"
  if (isOdd(number)) console.log("Number is odd.");
  else console.log("Number is even.");
}

function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
 return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}

// Note: filter can be only found in an array -Mirza

getListofOddNumbers(3);
getListofOddNumbers(5);
getListofOddNumbers(2);

//

function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise

function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
  return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
// return arguments.filter((arguments) => isOdd(arguments)); --> not possible
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9, 11, 17, 5);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)
