// 10.The following code uses the Date object to print the current time and the number of hours that have passed today so far. 

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// Extend the code to do the following:
// a) Print the total number of minutes that have passed so far today

const minutesPassed = today.getHours() * 60 + today.getMinutes(); // adding the hours passed + the extra minutes past the hour
console.log(minutesPassed + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today

const secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds(); // 1 hour = 3600 seconds; 1 minute = 60 seconds
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate and print your age as: 'I am x years, y months and z days old'

function printAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) { // birthday day hasn’t occurred yet in this month
        months -= 1; // subtract 1 from 'months'
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate(); // add the number of days to the previous month to 'days'
    }

    if (months < 0) { // birthday hasn’t occurred yet this year
        years -= 1; // subtract 1 from 'years'
        months += 12; // add 12 to months to convert it into a positive month count
    }

    return { years, months, days };
}

const myBirthday = new Date('1992-12-26'); // my birthday
const age = printAge(myBirthday);
console.log(`I am ${age.years} years, ${age.months} months and ${age.days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24; // milliseconds in one day (86,400,000 ms)
    const msDiff = Math.abs(date2 - date1); // absolute difference in ms
    return Math.floor(msDiff / msPerDay);
}

const d1 = new Date('2025-01-01');
const d2 = new Date('2025-12-07');
console.log(daysInBetween(d1, d2)); // number of days between the two dates