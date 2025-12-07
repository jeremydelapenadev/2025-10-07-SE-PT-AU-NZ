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