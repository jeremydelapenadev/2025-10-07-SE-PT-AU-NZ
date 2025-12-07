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

const animals = ['cat', 'dog', 'bird', 'cat', 'dog'];
console.log(unique(animals));     // [ 'cat', 'dog', 'bird' ]