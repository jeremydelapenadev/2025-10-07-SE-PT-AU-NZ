let sales = {
    numberofItems : 10,
    years : 2,
}

let person = {
    name: "Bruce",
    location: "New Zealand",
    // not an efficient way --> address: "21 Elliot Street, Auckland, 0600",
    address: { // much more efficient
        street: "21 Elliot", 
        city: "Auckland",
        postcode: "0600",
    },
    totalSales: sales,
}

console.log(person);

// let anotherPerson = {...person}; // shallow cloning

let anotherPerson = JSON.parse(JSON.stringify(person)); // deep cloning

person.totalSales.years = 10;

anotherPerson.address.city = "Wellington";

console.log(anotherPerson);

console.log(person);