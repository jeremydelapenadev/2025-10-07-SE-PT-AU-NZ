let isChecked = false;

console.log(isChecked); // in Boolean -- implicit converstion
console.log(String(isChecked)); // in white -- explicit conversion

let number = 546;
let number1 = 467;
console.log(String(number));
console.log(number + number1); // will add
console.log(String(number) + String(number1)); // will not add

console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’


