/* instead of individually labeling them:
let customerName = "Jeremy";
let customerDOB = "01-01-01";
let customerLocation = "Australia";
let customerCity = "Blair Athol";
*/

let Customer = {
    name: "Jeremy",
    location: "Australia",
    City: "Blair Athol",
    DOB: "01-01-01"
}

const tv = { // object starts here
brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
size: "55-inch", // values can be any data type
model: 2023, // multiple key-value pairs are separated by commas
resolution: "4K" // the comma on the last key-value pair can be omitted
} // object ends here. All data is stored in tv variable.

console.log(tv.brand);
console.log(tv["model"]);
delete tv.model;

tv.manufacturedate = "2025";

console.log(tv);