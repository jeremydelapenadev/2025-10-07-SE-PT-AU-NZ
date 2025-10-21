function PrintLinesToConsole() {
  console.log("Hello world");
  console.log("This is javascript");
  console.log("I'm learning");
  console.log("Basics of javascript");
  console.log("Hello 1");
  console.log("Hello 2");
  console.log("Hello 3");
  console.log("Hello 4");
}
//PrintLinesToConsole()

function Sum() {
    console.log(2 + 3);
    console.log(11 + 5);
}
Sum()

function Sum1(a, b) {
    console.log(a + b);
}
//Sum1(2, 3);
//Sum1(11,5);
//Sum1(13123,123123);

function Sum2(a, b) {
    return a + b;
}
//Sum2(2, 3) -- nothing will happen because it's not called / printed in the console
//console.log(Sum2(2, 3));

//-- Mathematical Operations --//

function Sum(a, b) {
    return a + b;
}
function Subtract(a, b) {
    return a - b;
}
function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}
console.log(Multiply(Sum(2, 3), Sum(11, 5)));