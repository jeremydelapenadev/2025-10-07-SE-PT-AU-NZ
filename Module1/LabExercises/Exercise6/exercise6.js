let userData = {
    "Title" : "The Hunger Games",
    "Description" : "The Hunger Games is a dystopian novel set in a future world where the government, known as the Capitol, forces children from twelve districts to fight to the death in a televised competition. The story follows Katniss Everdeen, a brave young woman who volunteers to take her sister’s place in the deadly games and becomes a symbol of resistance against oppression.",
    "Author": "Suzanne Collins",
    "Number of Pages" : "Approximately 374 pages (may vary by edition)"
}

console.log (userData.Title);
console.log (userData.Description);
console.log (userData.Author);
console.log (userData ["Number of Pages"]);

console.log(userData);

userData.Description = "The Hunger Games is about a girl named Katniss Everdeen who lives in a country called Panem. Every year, the government makes children fight in a televised competition called the Hunger Games. Katniss volunteers to take her sister’s place and must use her skills to survive."

console.log(userData);

let userDataArray = [userData.Title, userData.Description, userData.Author, userData["Number of Pages"]];

userDataArray.forEach(item => console.log(item));