// this is recognised by the Jest NPM

// First we import the square function
const { square } = require("./square");


// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
// Test case to test square of 5
test('square 5 to get 25', () => {
expect(square(5)).toBe(25);
}); // pass

test('square 25 to be 625', ()=> {
    expect(square(25)).toBe(625);
});

/*
test('square 25 to be 125', ()=> {
    expect(square(25)).toBe(125);
}); // fail
// */