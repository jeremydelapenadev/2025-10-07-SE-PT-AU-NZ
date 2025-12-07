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

/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise. */

function truncate(str) {
    return str.slice(0,25) + "...";
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

// b) Write another variant of the truncate function that uses a conditional operator. 

function truncateVar(str,max) {
    return str.length > max ? (str.slice(0,25) + "...") : str;
}

console.log(truncateVar('This text will be truncated if it is too long', 25)) // This text will be truncat...

console.log(truncateVar('This text is under 25', 25)) // This text is under 25

/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

const animals = ['Tiger', 'Giraffe']
console.log(animals)

// a) Add 2 new values to the end -- using 'push'
animals.push('Snake', 'Sheep')
console.log(animals)

// b) Add 2 new values to the beginning -- using 'unshift'
animals.unshift('Lion', 'Monkey')
console.log(animals)

// c) Sort the values alphabetically
function compareAnimals(a,b) {
    return a-b
}

console.log(animals.sort());

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
// reference: Page 29

function replaceMiddleAnimal(newValue){
    const middleAnimal = Math.floor(animals.length / 2);
    animals.splice(middleAnimal, 1, newValue);
}

replaceMiddleAnimal('Goat');
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case. 

function findMatchingAnimals(beginsWith) {
    return animals.filter (animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
    // filter - applies the condition to each item in the array
    // animal.toLowerCase - makes the animal to a lowercase set of letters
    // beginsWith.toLowercCase - makes the search a lowercase letter
    // startsWith - checks if the name begins with the letter searched
}

console.log(findMatchingAnimals('s')); // Snake
console.log(findMatchingAnimals('S')); // Snake -- still works, regardless if it's uppercase or lowercase
console.log(findMatchingAnimals('M')); // Monkey
console.log(findMatchingAnimals('m')); // Monkey

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

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code returns the wrong answer
// ANSWER: When using "toFixed()", it returns a string, and not a number. So when it's run on the console, it concatenates 'fixedTwenty' and 'fixedTen', hence "0.200.10"


// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    const twoDecimals = 100; // 2 decimal places
    return (Math.round(float1 * twoDecimals) + Math.round(float2 * twoDecimals)) / twoDecimals;
}

console.log(currencyAddition(0.2, 0.1)); // 0.3
console.log(0.3 == currencyAddition(0.2, 0.1)); // true

/* c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *)
on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation) {
    const twoDecimals = 100; // 2 decimal places
    const num1 = Math.round(float1 * twoDecimals);
    const num2 = Math.round(float2 * twoDecimals);
    let result;

    switch(operation) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = (num1 * num2) / twoDecimals;
            // for multiplication, multiply first then divide by 100
            break;
        case '/': result = num1 / num2;
            // for division, divide numbers first then multiply by twoDecimals
            break;
    }

    return result / twoDecimals; // convert back to decimal
}

console.log(currencyOperation(0.2, 0.1, '+')); // 0.3
console.log(currencyOperation(0.3, 0.1, '-')); // 0.2
console.log(currencyOperation(0.3, 0.3, '*')); // 0.2
console.log(currencyOperation(0.3, 0.2, )); // NaN

/* d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below: */

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
    const twoDecimals = Math.pow(10, numDecimals);
    const num1 = Math.round(float1 * twoDecimals);
    const num2 = Math.round(float2 * twoDecimals);
    let result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = Math.round((num1 * num2) / twoDecimals);
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            throw new Error('Invalid operation');
    }

    return result / twoDecimals;
}

console.log(currencyOperationExtended(0.1234, 0.5678, '+', 4)); // 0.6912
console.log(currencyOperationExtended(0.1, 0.2, '+'));           // 0.3 (default 2 decimals)
console.log(currencyOperationExtended(0.1, 0.2, '+', 10));       // 0.3

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values
from duplicatesArray. */

function unique(duplicatesArray) {
    return duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) === index);
        // filter loops on every element of the array
        // indexOf -- the idea is to keep the item if it is seen for the first time (===), then skip if not (as it's a duplicate)
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]

const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// Test with the following arrays and create another one of your own.

const animals1 = ['cat', 'dog', 'bird', 'cat', 'dog'];
console.log(unique(animals1));     // [ 'cat', 'dog', 'bird' ]

// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id. 

function getBookTitle(bookId) {
    const book = books
        .find(b => b.id === bookId);
    return book ? book.title : null; // return null if not found in the array
}

console.log(getBookTitle(3)); // "1984"
console.log(getBookTitle(10)); // null

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.

function getOldBooks() {
    return books
        .filter(b => b.year < 1950);
}

console.log(getOldBooks()); // book objects IDs 1, 3, and 4 will show up, as they're all LESS than (or before) 1950

// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’. 

function addGenre() {
    return books
        .map(b => ({ ...b, genre: 'classic' }));
}

console.log(addGenre()); // genre: 'classic' is added to all elements (books) in the array

// d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles
// for books written by authors whose names start with authorInitial.

function getTitles(authorInitial) {
    return books
        .filter(b => b.author.startsWith(authorInitial))
        .map(b => b.title);
}

console.log(getTitles('G')); // ["1984"] -- George Orwell
console.log(getTitles('F')); // ["The Great Gatsby"] -- F. Scoot Fitzgerald

// e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function latestBook() {
    let latestYear = -Infinity;
    let latest = null;

    books.forEach(b => {
        if (b.year > latestYear) {
            latestYear = b.year;
            latest = b;
        }
    });

    return latest;
}

console.log(latestBook()); // 'To Kill a Mockingbird' with the publication date on 1960

// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const contactsDEF = [
    ['Daniel', '0422334455'],
    ['Ella', '0433445566'],
    ['Fiona', '0444556677']
];

const phoneBookDEF = new Map(contactsDEF); 

// c) Update the phone number for Caroline

phoneBookABC.set('Caroline', '0499887766'); // overlaps the previous phone number

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
        console.log(`${name}: ${number}`);
    });
}

printPhoneBook(phoneBookABC); // prints Annabelle, Barry, and Caroline's phone numbers

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]); // spreads all its key-value pairs into the new array, alongside the phoneBookDEF array

// f) Print out the full list of names in the combined phone book

console.log([...phoneBook.keys()]);

// 9. Given the below salaries object, perform the following tasks.

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
        // Object.values() returns an array of all the salary values
        // reduce() - reduces an array to a single value + applying a function to each element in order + 0 indicates starting point
        // 0 + 35000 = 35000 + 25000 = 60000 + 55000 = 115000 + 75000 = 190000 + 43000 = 233000
}

console.log(sumSalaries(salaries)); // 233000

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
    let maxSalary = -Infinity; // any salary in the object will be higher
    let topPerson = ''; // empty string, which would hold the name of the top earner later on

    for (const [name, salary] of Object.entries(salaries)) { // using for... of loop destructures each pair
        if (salary > maxSalary) { // if salary is higher than maxSalary, updates the value
            maxSalary = salary;
            topPerson = name; // runs the function and holds the name of the earner with the higher salary
        }
    }

    return topPerson;
}

console.log(topEarner(salaries)); // "Christina"

// 10.The following code uses the Date object to print the current time and the number of hours that have passed today so far. 

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// Extend the code to do the following:
// a) Print the total number of minutes that have passed so far today

const minutesPassed = today.getHours() * 60 + today.getMinutes(); // adding the hours passed + the extra minutes past the hour
console.log(minutesPassed + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today

const secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds(); // 1 hour = 3600 seconds; 1 minute = 60 seconds
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate and print your age as: 'I am x years, y months and z days old'

function printAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) { // birthday day hasn’t occurred yet in this month
        months -= 1; // subtract 1 from 'months'
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate(); // add the number of days to the previous month to 'days'
    }

    if (months < 0) { // birthday hasn’t occurred yet this year
        years -= 1; // subtract 1 from 'years'
        months += 12; // add 12 to months to convert it into a positive month count
    }

    return { years, months, days };
}

const myBirthday = new Date('1992-12-26'); // my birthday
const age = printAge(myBirthday);
console.log(`I am ${age.years} years, ${age.months} months and ${age.days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24; // milliseconds in one day (86,400,000 ms)
    const msDiff = Math.abs(date2 - date1); // absolute difference in ms
    return Math.floor(msDiff / msPerDay);
}

const d1 = new Date('2025-01-01');
const d2 = new Date('2025-12-07');
console.log(daysInBetween(d1, d2)); // number of days between the two dates