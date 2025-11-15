let cost = 20;

let total = (cost * 4) / 50;

console.log(total);

let studentName = "Willy"

let fullName = studentName + " sobers";

console.log(fullName);

let apple = {
    color: "red",
    size: "medium",
    quantity: 5,
    radius : 1.36,
    diameter: 45.6,
    valueOf() { // representing a value from an object
        return this.quantity + this.radius + this.diameter;
    },
    toString () { // representing a string from an object
        return this.color + " royal gala";
    },
};

// let totalSales = (apple.quantity * 4) / 2;
// console.log(totalSales);

let totalDimensionsApple = apple.valueOf();
console.log(totalDimensionsApple);

let fullNameofApple = apple.toString() + " sobers";

console.log(fullNameofApple);