let string1 = "Apple"
let string2 = "Apples"

if(string1 > string2)
    console.log("String1 is greater.")
else console.log ("String2 is greater.");

console.log('Z'.codePointAt(0)) // 90

console.log(String.fromCodePoint(90)) // Z

console.log('A'.codePointAt(0)) // 65
console.log('a'.codePointAt(0)) // 97

for(let k = 65; k <= 90; k++)
    console.log(String.fromCodePoint(k));

for(let k = 65; k <= 122; k++)
    console.log(String.fromCodePoint(k));