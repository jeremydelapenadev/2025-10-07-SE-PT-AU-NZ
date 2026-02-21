import { useContext } from "react";
import { userContext } from "../context/UserProvider";

function HomePage() {
  const { currentUser } = useContext(userContext);

  return (
    <>
      <h1> Welcome to CodeQuest!</h1>
      {!currentUser ? (
        <h2>Please login to begin.</h2>
      ) : (
        <h2>Welcome, {currentUser}! You are now logged in.</h2>
      )}
    </>
  );
}

export default HomePage;
