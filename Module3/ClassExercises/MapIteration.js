const recipeMap = new Map([
['flour', '1 cup'],
['milk', '1/2 cup'],
['eggs', 2],
['butter', '50g']
])

const recipeMap2 = new Map();
recipeMap2.set('flour', '1 cup');
recipeMap2.set('milk', '1/2 cup');
recipeMap2.set('eggs', 2);
recipeMap2.set('butter', '50g');

console.log(recipeMap);
console.log(recipeMap2);

for (let ingredient of recipeMap.keys()) {
    console.log(ingredient);
}

for (let quantity of recipeMap.values()) {
    console.log(quantity);
}

for (let item of recipeMap) {
    console.log(item);
}

// converting Map to Object

let recipeObject = Object.fromEntries(recipeMap);

console.log(recipeObject);

// converting Object to Map

const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }

const priceMap = new Map( Object.entries(priceObject) )
console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap.get('banana')) // 1