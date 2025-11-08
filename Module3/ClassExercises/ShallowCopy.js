let person = {};
person["firstName"] = "Jeremy";
person["age"] = 32;

console.log(person);

//

const user = { name: 'Elliot', age: 27 };

const userClone = {}; // empty object, refers to different memory location

const userClone2 = {...user, age: 50, country: "New Zealand"};

for (let key in user) { // iterate over user properties
userClone[key] = user[key]; // re-create them in userClone
}

userClone.age = 30;

userClone2.age = 50;

console.log(userClone); // { name: 'Elliot', age: 27 }

console.log(user);

console.log(userClone2);

//

const vehicle = { make: "Toyota", model: "Camry"};

const mergedUserVehicle = {
    ...user,
    ...vehicle,
    region: "South Pacific",
    sales: 4000,
}

console.log(mergedUserVehicle);