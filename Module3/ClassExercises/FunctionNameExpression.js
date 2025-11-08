
HelloFunction("Jem","NSW","Australia");
// sayHello();

const sample = function () { // function expression
    console.log("Sample function");
};

const sayHello = function(name) { // function expression
    console.log("Hello " + name);
    console.log(arguments);
};

sayHello();

function HelloFunction(name, place, country) {
    console.log("hello");
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

const sayHelloArrow = () => { //omitted the function keyword
    console.log("hello arrow function");
}

sayHelloArrow ()

const sayHi = (name) => {
    console.log("Hello " + name);
}

sayHi("Christian");

const Add = (x, y) => {
    return (x + y)
}
// or one line syntax --> const Add = (x, y) => x + y;

const Subtract = (x, y) => x - y;

Add (10,5); // not working --> need to declare
console.log(Subtract (20,10));

// 

function functionCaller(x, parameter) {
    x(parameter);
}

functionCaller(sayHello, "Jeremy"); // sayHello is a functional name expression

// function name expression is useful when you want to re-use it sometime after 

