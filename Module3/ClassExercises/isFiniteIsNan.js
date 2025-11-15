let number1 = 145;

if (isNaN(number1))
    console.log("number is not a number")
else console.log ("number is a number");

let number2 = "145Jeremy";

if (isNaN(number2))
    console.log("number is not a number")
else console.log ("number is a number");

if (isFinite(number1)) console.log("It's a finite number")
    else console.log("It's not a finite number");

if (isFinite(number2)) console.log("It's a finite number")
    else console.log("It's not a finite number");

let number3 = Infinity;

if (isFinite(number3)) console.log("It's a finite number")
    else console.log("It's not a finite number");

console.log(+"100px");
console.log(Number("100px"));

console.log(parseInt("100px"));
console.log(parseInt("px100")); // it won't work. NaN
console.log(parseInt("100px250"));

console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops