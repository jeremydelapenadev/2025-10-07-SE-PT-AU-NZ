const box1 = {
  size: "large",
  dimensions: { width: 50, length: 70, height: 30, units: "cm" },
  items: ["glasses", "plates", "cutlery"],
};
const boxString = JSON.stringify(box1); // convert object to string
const box2 = JSON.parse(boxString); // convert string back to new object
// how could we check to make sure both boxes are the same but independent?

console.log(box1);
box1.dimensions.length = 560;
console.log(box2);

console.log(box1); // changed box1