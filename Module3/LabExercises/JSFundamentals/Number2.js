// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // 7
console.log(addition) // 34 INCORRECT

let multiplication = three * four // 12
console.log(multiplication) // 12 CORRECT PRINTING

let division = three / four // 0.75
console.log(division) //0.75 CORRECT PRINTING

let subtraction = three - four // -1
console.log(subtraction) //-1 CORRECT PRINTING

let lessThan1 = three < four // true
console.log(lessThan1) // true CORRECT PRINTING

let lessThan2 = thirty < four // false
console.log(lessThan2) // true INCORRECT

// they are relying on the strings, rather than the number values. If we remove the "" on the numbers 3, 4, 30, it'll be correct.

let three2 = 3
let four2 = 4
let thirty2 = 30

//what is the value of the following expressions?
let addition1 = three2 + four2 // 7
console.log(addition1) // 7 CORRECT PRINTING

let multiplication1 = three2 * four2 // 12
console.log(multiplication1) // 12 CORRECT PRINTING

let division1 = three2 / four2 // 0.75
console.log(division1) //0.75 CORRECT PRINTING

let subtraction1 = three2 - four2 // -1
console.log(subtraction1) //-1 CORRECT PRINTING

let lessThan11 = three2 < four2 // true
console.log(lessThan11) // true CORRECT PRINTING

let lessThan21 = thirty2 < four2 // false
console.log(lessThan21) // false CORRECT PRINTING