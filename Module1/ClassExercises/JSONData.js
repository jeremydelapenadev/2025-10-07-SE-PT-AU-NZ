let userData = {
    "firstName" : "Sammy", //this is one field of JSON
    "lastName" : "Shark",
    "age": 25,
    "followers" : 1000,
}

console.log(userData.firstName)
console.log(userData.lastName)
console.log(userData.age)
console.log(userData.followers)

let userDataArray = ["Sammy", "Shark", 25, 1000] // not a good choice

userData.followers = 1200;

console.log(userData);

userData["age"] =30;

console.log(userData);

// 

let book = {
    "Author" : "William Shakespeare",
    "Published date" : "1958-01-01",
    "Company" : "xyz"
}

console.log(book.Author)
console.log(book)

// if there's a space in the key, you should use the square brackets "[]"
book["Published date"] = "1930-02-01"

book.Country = "England"

console.log(book)

delete userData.followers;

console.log(userData);