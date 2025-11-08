const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers

console.log(bigint_valid == bigint_invalid) // false

if(bigint_valid == bigint_invalid) {
    console.log("Both are equal");
} else {
    console.log("Not Equal");
}

let x = 20
let y = 30
let z = 50

if (x > y) {
    console.log("X is greater than y");
} else if (y > z) {
    console.log("y is greater than x")
} else if {
    console.log("z is the greatest")
} else {
    console.log("None of the conditions met");
}