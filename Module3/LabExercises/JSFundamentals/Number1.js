// 1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0 // 1
console.log("" + 1 + 0) // 10 INCORRECT

"" - 1 + 0 // 0
console.log("" - 1 + 0) // -1 INCORRECT

true + false // false
console.log(true + false) //1 INCORRECT

!true // false
console.log(!true) //false CORRECT

6 / "3" // undefined
console.log(6 / "3") //2 INCORRECT

"2" * "3" // undefined
console.log("2" * "3") //6 INCORRECT

4 + 5 + "px" // 9px
console.log(4 + 5 + "px") //9px CORRECT

"$" + 4 + 5 // $45
console.log("$" + 4 + 5) //$45 CORRECT

"4" - 2 //2
console.log("4" - 2) //2 CORRECT

"4px" - 2 // undefined
console.log("4px" - 2) //NaN INCORRECT

" -9 " + 5 // -95
console.log(" -9 " + 5) //-9 5 CORRECT

" -9 " - 5 // undefined
console.log(" -9 " - 5) //-14 INCORRECT

null + 1 // null
console.log(null + 1) //1 INCORRECT

undefined + 1 // 1
console.log(undefined + 1) //NaN INCORRECT

undefined == null // true
console.log(undefined == null) //true CORRECT

undefined === null // true
console.log(undefined === null) //false INCORRECT

" \t \n" - 2
/*
    - 2 */
console.log(" \t \n" - 2) //-2 CORRECT

// Total Score: 7/17

// retest
console.log("-----Re-Test-----")

"" + 1 + 0 // 10
console.log("" + 1 + 0) //10 CORRECT

"" - 1 + 0 // -1
console.log("" - 1 + 0) // -1 CORRECT

true + false // 1
console.log(true + false) // 1 CORRECT

!true // false
console.log(!true) // false CORRECT

6 / "3" // 2
console.log(6 / "3") // 2 CORRECT

"2" * "3" // NaN
console.log("2" * "3") // 6 INCORRECT

4 + 5 + "px" // 9px
console.log(4 + 5 + "px") // 9px CORRECT

"$" + 4 + 5 // $45
console.log("$" + 4 + 5) // $45 CORRECT

"4" - 2 //2
console.log("4" - 2) // 2 CORRECT

"4px" - 2 // NaN
console.log("4px" - 2) // NaN CORRECT

" -9 " + 5 // -95
console.log(" -9 " + 5) // -9 5 CORRECT

" -9 " - 5 // NaN
console.log(" -9 " - 5) // -14 INCORRECT

null + 1 // null
console.log(null + 1) // 1 INCORRECT

undefined + 1 // NaN
console.log(undefined + 1) // NaN CORRECT

undefined == null // true
console.log(undefined == null) // true CORRECT

undefined === null // false
console.log(undefined === null) // false CORRECT

" \t \n" - 2
/*
    - 2 */
console.log(" \t \n" - 2) // -2 CORRECT

// Total Score: 14/17