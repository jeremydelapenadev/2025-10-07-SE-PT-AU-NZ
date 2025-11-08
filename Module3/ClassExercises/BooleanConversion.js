console.log( Boolean("") ) // false - empty string
console.log( Boolean("false") ) // true - non-empty string

console.log( Boolean(1) ) // true - non-zero value
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(-1) ) // true - non-zero number

console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number

if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg