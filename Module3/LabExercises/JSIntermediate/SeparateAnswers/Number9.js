// 9. Given the below salaries object, perform the following tasks.

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
        // Object.values() returns an array of all the salary values
        // reduce() - reduces an array to a single value + applying a function to each element in order + 0 indicates starting point
        // 0 + 35000 = 35000 + 25000 = 60000 + 55000 = 115000 + 75000 = 190000 + 43000 = 233000
}

console.log(sumSalaries(salaries)); // 233000

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
    let maxSalary = -Infinity; // any salary in the object will be higher
    let topPerson = ''; // empty string, which would hold the name of the top earner later on

    for (const [name, salary] of Object.entries(salaries)) { // using for... of loop destructures each pair
        if (salary > maxSalary) { // if salary is higher than maxSalary, updates the value
            maxSalary = salary;
            topPerson = name; // runs the function and holds the name of the earner with the higher salary
        }
    }

    return topPerson;
}

console.log(topEarner(salaries)); // "Christina"