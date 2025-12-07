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