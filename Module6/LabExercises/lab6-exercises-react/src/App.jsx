import { useState } from "react";
import "./App.css";
import Greeting from "./mycomponents/Greeting.jsx";
import BigCats from "./mycomponents/BigCats.jsx";
import Emoji from "./mycomponents/Emoji.jsx";
import Calculator from "./mycomponents/Calculator.jsx"

function App() {
  return (
    <>
      {/* LAB EXERCISE 1 REQUIREMENT */}

      <div className="componentBox">
        <h2> Lab Exercise 1 - Greeting </h2>
        <Greeting name="Jeremy" /> {/* passing with the name prop */}
        <p> It's nice to see you again.</p> {/* passing prop via children */}
      </div>
      <hr />

      {/* LAB EXERCISE 3 REQUIREMENT */}
      <div className="componentBox">
        <h2> Lab Exercise 3 - Emojis</h2>
        <Emoji></Emoji>
      </div>
      <hr />

      {/* LAB EXERCISES 2, 4, AND 5 REQUIREMENTS */}

      <div className="componentBox">
        <h2> Lab Exercises 2, 4, and 5 - Big Cats </h2>
        <BigCats></BigCats>
      </div>
      <hr />

      {/* LAB EXERCISE 6 REQUIREMENT */}
      <div className="componentBox">
        <h2> Lab Exercise 6 - Calculator</h2>
        <Calculator></Calculator>
      </div>
    </>
  );
}

export default App;
