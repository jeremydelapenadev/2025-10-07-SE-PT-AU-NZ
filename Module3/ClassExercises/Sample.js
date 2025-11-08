console.log("Print in the console.")
console.log("Print second line.")

// OR
console.log("Print in the console."); console.log("Print second line.")


function Sum(a,b) {
    return a +b;
} 

let per2son1 = "Mirza";
let _per$son = "Jeremy";
// cannot be let 5person, for example

let person = "Arshad";
console.log(person);

let person1 = "Arshad";
person1 = {name:"Arshad", age: 30};
person1 = false;
console.log(person1);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("Mirza" / 45); // NaN
console.log("Amazon" * 60);

let one = 1;
let two = 2;
let three = 3;
let four = 4;

// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - three * two / one); // -3

three = three +1; //or
three += 1; //or
three++; // increment by 1
console.log(three); // 4

four = four -1;
four -= 1; 
four--;
console.log(four); // 3