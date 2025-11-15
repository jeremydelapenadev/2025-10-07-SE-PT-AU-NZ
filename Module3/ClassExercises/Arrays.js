let arr1 = ("Auckland", "Christchurch", "Wellington");

let arr2 = [...arr1]; // copies by reference

arr2.pop(); // removes the element from end

console.log(arr1);
console.log(arr2);

const matrix = [ // 3x3 matrix
[1, 2, 3], // row 0
[4, 5, 6], // row 1
[7, 8, 9] // row 2
]

console.log(matrix[1][1]) // 5, the value in row 1, column 1
console.log(matrix[2][2]) // 9, the value in row 2, column 2

let students = [
    { firstName: "Mirza", location: "Auckland"},
    { firstName: "Billy", location: "Wellington"},
];
students[1].location;


// slice method

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
const endsSliced = sliceArray.slice(-4, -2)

console.log(sliced);
console.log(endSliced);
console.log(endsSliced);

// splice method

const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")

console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

// concat method

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]

const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// or

const combined1 = array1.concat(array2, array3, 10, 11, 12, 13)
console.log(combined1) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13 ]

// indexOf method

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

let bIndex = marks.indexOf('B-')
let cIndex = marks.lastIndexOf("B-");
let eIndex = marks.indexOf('E');
let zIndex = marks.indexOf("G");

// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex); // B- is at index: 2
console.log(eIndex); // -1, since not found
console.log(cIndex);
console.log(zIndex);

if(marks.indexOf("G")>0)
    console.log("Item exists.");
else console.log("Item doesn't exists.");

// join method
const elements = ['Wind', 'Water', 'Fire', 'Air']

console.log( elements.join() ) // Wind,Water,Fire,Air
console.log( elements.join(' ') ) // Wind Water Fire Air
console.log( elements.join('; ') ) // Wind; Water; Fire; Air