const room = {
number: 23
}
const meetup = {
title: "Strategy Conference",
participants: ['Chris', 'Tina'],
}

meetup.place = room; // meetup references room ; creating a new property value "place" whose value is "room"
// room.occupiedBy = meetup; // room references meetup (property --> "occupiedBy" and value --> "meetup")

JSON.stringify(meetup); // TypeError: Converting circular structure to JSON --> if room.OccupiedBy is included in the code

console.log(JSON.stringify(meetup));

console.log(JSON.stringify(meetup, ["title", "participants"])); // {"title":"Strategy Conference","participants":["Chris","Tina"]}

// replacer

console.log( JSON.stringify(meetup, function(key, value) {
if (key != '' && value == meetup) return undefined // skip references to current object
else if (typeof value == 'function') return value.toString() // stringify functions
return value // otherwise return original value unchanged
}, 2) ); // use 2 spaces for nicer formatting