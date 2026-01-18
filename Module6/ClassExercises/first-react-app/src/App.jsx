import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pet from "./MyComponents/Pet.jsx";
import City from "./MyComponents/City.jsx";
import FullName from "./MyComponents/FullName.jsx";
import ComplexComment from "./MyComponents/ComplexComment.jsx";
import Callout from "./MyComponents/Callout.jsx";
import MovieList from "./MyComponents/MovieList.jsx";

function App() {
  const [count, setCount] = useState(0);

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      <MovieList></MovieList>
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>

      <ComplexComment
        text={comment.text}
        author={comment.author}
        date={comment.date}
      ></ComplexComment>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <div className="card">
        <Pet type="cat" color="black" name="black cat"></Pet>
        <City name="Melbourne"></City>
        <FullName firstName="Jeremy" lastName="Dela Pena"></FullName>
        <FullName firstName="Bill" lastName="Gates"></FullName>
        <FullName firstName="Joyce" lastName="Byers"></FullName>
      </div>
    </>
  );
}

export default App;
