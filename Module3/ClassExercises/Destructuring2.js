const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

// long way of swapping
let x = 10;
let y = 20;
console.log (`x: ${x} and y is ${y}`);
let temp;
temp = y;
y = x;
x = temp;
console.log (`x: ${x} and y is ${y}`);

// destructuring (shorter way)
[y, x] = [x, y];
console.log (`x: ${x} and y is ${y}`);