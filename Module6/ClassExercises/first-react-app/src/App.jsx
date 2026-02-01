import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./MyComponents/PropsDisplayer.jsx";
import Pet from "./MyComponents/Pet.jsx";
import City from "./MyComponents/City.jsx";
import FullName from "./MyComponents/FullName.jsx";
import ComplexComment from "./MyComponents/ComplexComment.jsx";
import Callout from "./MyComponents/Callout.jsx";
import MovieList from "./MyComponents/MovieList.jsx";
import Counter from "./MyComponents/Counter.jsx";
import MoodChanger from "./MyComponents/MoodChanger.jsx";
import BirthdayTranslator from "./MyComponents/BirthdayTranslator.jsx";
import Weather from "./MyComponents/Weather.jsx";
import LoginForm from "./MyComponents/LoginForm.jsx";
import SampleUncontrolledForm from "./MyComponents/SampleUncontrolledForm.jsx";
// import ExplodingBomb from "./MyComponents/ExplodingBomb.jsx";
import ClockDisplay from "./MyComponents/ClockDisplay.jsx";
import ActivityFinder from "./MyComponents/ActivityFinder.jsx";
import VideoPlayer from "./MyComponents/VideoPlayer.jsx";
import ReducerCounter from "./MyComponents/ReducerCounter.jsx";
import PostListReducer from "./MyComponents/PostListReducer.jsx";
import SubscribeForm from "./MyComponents/SubscribeForm.jsx";
import { UserProvider } from "./MyComponents/UserProvider.jsx";
import { MyThemeContext } from "./MyComponents/MyThemeProvider.jsx";

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
      <UserProvider>
        {" "}
        {/* STEP 2: Providing the context */}
        <MyThemeContext>
          {/* All below components are the children of UserProvider to receive the context. */}
          <SubscribeForm></SubscribeForm>
          <ActivityFinder></ActivityFinder>
          <LoginForm></LoginForm>
        </MyThemeContext>
      </UserProvider>
      <hr />
      <PostListReducer> </PostListReducer>
      <ReducerCounter></ReducerCounter>
      <VideoPlayer></VideoPlayer>
      <ClockDisplay> </ClockDisplay>
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />
      {/* <ExplodingBomb></ExplodingBomb> */}
      <SampleUncontrolledForm></SampleUncontrolledForm>
      <Weather></Weather>
      <BirthdayTranslator></BirthdayTranslator>
      <MoodChanger></MoodChanger>
      <Counter></Counter>
      <MovieList></MovieList>
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>

      <div className="componentBox">
        <ComplexComment
          text={comment.text}
          author={comment.author}
          date={comment.date}
        ></ComplexComment>
      </div>
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
