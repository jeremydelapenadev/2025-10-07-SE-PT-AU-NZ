let today = new Date();

console.log(today); // 2025-11-15T00:12:51.954Z
console.log(+today); // 1763165571954

const jan2_1970 = new Date(1000 * 60 * 60 * 24) // a full day in milliseconds after Jan 1
console.log(jan2_1970) // 1970-01-02T00:00:00.000Z

const christmas = new Date("2025-12-25");

console.log(christmas);
console.log(christmas.getDay());

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let day = christmas.getDay();        // JS day (0 = Sun)
let mondayBased = (day + 6) % 7;     // convert so Monday = 0

console.log(days[mondayBased]);

//

const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)
console.log(nyeLocal) // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC) // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone