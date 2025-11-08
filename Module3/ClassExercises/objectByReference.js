let student = {
    firstName : "Jeremy",
    country : "Australia",
}

let student2 = student
console.log(student);
console.log(student2);

student2.country = "New Zealand";

console.log(student);
console.log(student2);