export default function Compute(first, second, operator) {
  // this is where computation can be made, using the props from Calculator.jsx
  const a = parseFloat(first);
  const b = parseFloat(second);

  if (isNaN(a) || isNaN(b)) return "";

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "÷":
      return b !== 0 ? a / b : "Error";
    default:
      return "";
  }
}
