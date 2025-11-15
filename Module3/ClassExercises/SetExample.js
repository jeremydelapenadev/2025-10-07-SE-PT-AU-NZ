let newArray = ["Mirza", "Smith", "Jeremy", "Dela Pena", "Ben", "Smith"]
let newSet = new Set(["Mirza", "Smith", "Jeremy", "Dela Pena", "Ben", "Smith"]);
console.log(newArray);
console.log(newSet); 

newSet.add("Billy");
newSet.add("George");
console.log(newSet.size);
console.log(newSet); 

const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])

for(let name of names) { // for.. of
    console.log(name)
}

names.forEach(name => console.log(name)); // forEach

console.log( names.delete('Jack') ) // true - successful delete
console.log( names.has('Jack') ) // false - Jack no longer exists in set
console.log( names.has('Mateo') ) // true - Mateo does exist in set
names.clear()
console.log(names) // Set(0) {}

