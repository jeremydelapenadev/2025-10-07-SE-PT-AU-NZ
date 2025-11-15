let studentMap = new Map()
let objectStore = { location: "Auckland" }; // create an object and store it if you use the curly bracket

studentMap.set("firstName", "Mirza")
studentMap.set(true, "yes")
studentMap.set(objectStore, {"Profession":"Trainer"})

console.log(studentMap)
console.log(studentMap.size)
console.log(studentMap.get(true));
console.log(studentMap.get(objectStore));

