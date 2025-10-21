console.log("Jeremy");
console.log("Jeremy123");

var trainerName;
let cohortLocation;
//const countryLocation = "Australia/New Zealand";
const numberofStudents = 6;

trainerName = "Jeremy"
cohortLocation = "Remote"

console.log(trainerName);
console.log(cohortLocation);
console.log(numberofStudents);

trainerName = "XYZ";
cohortLocation = "Sydney";

console.log(trainerName);
console.log(cohortLocation);

function Sum(a,b) {
    let studentName = "Pia";
    console.log(cohortLocation);
    if (studentName == "Pia") {
        let courseName = "Software Engineering";
        console.log(cohortLocation);
        console.log(studentName);
    } else {
        console.log("inside else block");
        console.log(studentName);
    }

    //console.log(courseName);
    return a + b;
}

Sum (10, 5);

// const can be put inside the block, then used again outside afterwards.

function Sum(a,b) {
    let studentName = "Pia";
    console.log(cohortLocation);
    const countryLocation = "Philippines";
    console.log(countryLocation);
    if (studentName == "Pia") {
        let courseName = "Software Engineering";
        console.log(cohortLocation);
        console.log(studentName);
    }
}

const countryLocation = "United States";
console.log(countryLocation);