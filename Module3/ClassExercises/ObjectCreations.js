function User(first, last) { // constructor function
this.first = first;
this.last = last;
this.hasShortName = () => this.first.length <= 3;
/* OR this.hasShortName = () => {
    if (this.first.length <=3) return true;
}; */
}

// we can create multiple users with different names
let user1 = new User('Tim', 'Smith'); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

let user2 = new User("Jeremy", "Dela Pena");
let user3 = new User("Will", "Smith");

console.log(user1);
console.log(user2);
console.log(user3);