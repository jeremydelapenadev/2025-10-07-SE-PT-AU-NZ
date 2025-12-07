const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = [] // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype

const str1 = "Sample";

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(str1)));

String.prototype.show = function () {
    // creates new 'show' function on built-in String prototype
    console.log(this);
}

str1.show();