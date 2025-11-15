const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup)); // no more circular references as room stringifies to 23
// {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

const meetup2 = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-01-01",
};

const meetupString = JSON.stringify(meetup2);
console.log(meetupString);

const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
  if (!isNaN(Date.parse(value))) return new Date(value); // if valid date, create Date object
  return value;
});

console.log(meetupParsed);