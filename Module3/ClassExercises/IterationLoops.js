let myGoal = 10;

for (let k = 0; k < myGoal; k++) {
    console.log(` iteration of ${k} of ${myGoal} `);
}

const phone = {
model: 'iPhone 11',
colour: 'black',
storage: 64
}

for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + phone[key]); // prints each object value in turn
}