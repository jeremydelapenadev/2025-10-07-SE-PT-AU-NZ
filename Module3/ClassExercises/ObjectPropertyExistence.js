// property existence test

const phone = {
model: 'iPhone 11',
colour: 'black'
}

if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
if (phone.storage) { // undefined counts as false, so the below won't print
console.log(`My ${phone.model} has ${phone.storage}GB`);
}

// alternatively

phone.colour
    ? console.log(`My ${phone.model} is ${phone.colour}`)
    : console.log("Phone colour does not exist."); 

phone.storage
    ? console.log(`My ${phone.model} has ${phone.storage}GB`)
    : console.log("Phone does not have any storage property."); 