const { subtract } = require("./subtract");

test('testing subtract of 5 and 2 to be 3', () => {
    expect(subtract(5,2)).toBe(3);
})