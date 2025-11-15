const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
console.log(n.toFixed(4))

console.log(n.toPrecision(10))

const hello = 'hello world' // primitive string
const welcome = 'WELCOME'
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(welcome.toLowerCase())

console.log(hello.endsWith('world')) // true

hello.startsWith("hello") ? console.log("success") : console.log("failure");