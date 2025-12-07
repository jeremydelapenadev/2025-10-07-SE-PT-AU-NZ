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