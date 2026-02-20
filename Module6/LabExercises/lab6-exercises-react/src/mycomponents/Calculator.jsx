/* LAB EXERCISE 6: (page 89)

[/] Design and create a basic Calculator component which takes 2 numbers and
      the operator provided by the user and displays the result. */

/* Thought Process:

1. Start with identifying how the calculator will be structured.
2. Put buttons in an array.
3. Compute using the formula from Compute.jsx.

*/

import { useState } from "react";
import Compute from "./Compute";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (!isNaN(value)) {
      if (!operator) setFirstNumber((prev) => prev + value);
      else setSecondNumber((prev) => prev + value);
    } else if (["+", "-", "x", "÷"].includes(value)) {

      /* !isNaN(value) → checks if the button is a number (0-9).
      If no operator has been pressed yet → append number to firstNumber.
      If an operator is already set → append number to secondNumber.
      prev + value ensures multiple digits can be entered (e.g., pressing 1 then 2 → 12).  */

      if (firstNumber) setOperator(value);
    } else if (value === "=") {

      /* Checks if the clicked button is one of the operators.
      Only sets the operator if firstNumber exists.
      Prevents pressing an operator first without a number. */
      
      if (firstNumber && secondNumber && operator) {
        const res = Compute(firstNumber, secondNumber, operator);
        setResult(res);
      }
    } else if (value === "Clear") {

      /* Only works if firstNumber, secondNumber, and operator exist.
      Calls Compute(firstNumber, secondNumber, operator) to perform calculation.
      Stores result in result state. */
      setFirstNumber("");
      setSecondNumber("");
      setOperator("");
      setResult(null);
    } // Resets all inputs and result

    else if (value === "Back") {
      if (secondNumber) setSecondNumber((prev) => prev.slice(0, -1));
      else if (operator) setOperator("");
      else setFirstNumber((prev) => prev.slice(0, -1));
    } else if (value === "+/-") {

      /* Removes last character entered:
      If typing secondNumber → remove last digit.
      If operator exists → remove it.
      Otherwise → remove last digit of firstNumber.
      .slice(0, -1) → removes the last character of the string. */

      if (secondNumber) setSecondNumber((prev) => (-Number(prev)).toString());
      else setFirstNumber((prev) => (-Number(prev)).toString());
    } else if (value === ".") {

      /* Converts current number to positive or negative.
      Uses Number(prev) to convert string to number, then - to flip sign, then .toString() to store back as string. */

      if (!operator && !firstNumber.includes("."))
        setFirstNumber((prev) => prev + ".");
      else if (operator && !secondNumber.includes("."))
        setSecondNumber((prev) => prev + ".");
    }
    /* Appends a decimal point only if it doesn’t already exist in the current number.
      Works for firstNumber or secondNumber depending on whether an operator has been pressed. */
  };

  const buttons = [
    ["Clear", "Back", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  // This is a 2D array representing rows of buttons.
  // Each sub-array becomes one row in the UI.

  return (
    <>
      {/* Shows current input in the display. */}

      <div className="display">
        {firstNumber} {operator} {secondNumber}{" "}
        {result !== null ? `= ${result}` : ""}
      </div>

      {/* Loops over each row → creates a div with class calc-button-group.
      Loops over buttons in that row → creates a <button> element.
      If button is = → applies .equal-sign CSS.
      onClick={() => handleClick(btn)} → calls handleClick with the button value when pressed. */}

      {buttons.map((row, i) => (
        <div key={i} className="calc-button-group">
          {row.map((btn) => (
            <button
              key={btn}
              className={btn === "=" ? "equal-sign" : ""}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </>
  );
}

export default Calculator;
