function makeAdder(x) {
    // function factory: bundles value of x into the scope of adder
    return function adder(y) {
        // closure function 'adder' now has access to both x and y when created
        return x + y;
    }
}

let addr1 = makeAdder(10) // function names expression, aka variable referring to a function definition

console.log(addr1(20)) // adder(y) function will be involved this time

//

function makeHeading(hTag) {
    // every call to makeHeading could have different values for hTag
    return function (title) {
        // unnamed closure function, can access value of hTag when created
        return `<${hTag}>${title}</${hTag}>`;
    }
}

let hddr1 = makeHeading("h")
console.log(hddr1("Welcome to my course"));

let hddr2 = makeHeading("h2")
console.log(hddr2("Welcome to my course"));

let hddr3 = makeHeading("h3")
console.log(hddr3("Welcome to my course"));

let hddr4 = makeHeading("h4")
console.log(hddr4("Welcome to my course"));