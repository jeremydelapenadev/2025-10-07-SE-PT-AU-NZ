import { useContext } from "react";
import { userContext } from "../context/UserProvider";

function HomePage() {
  const { currentUser } = useContext(userContext);

  return (
    <>
      <h1> Welcome to Module 7 Lab Work!</h1>
      {!currentUser ? (
          <h2>Please login to access the bitcoin rates.</h2>
      ) : <h2>Welcome {currentUser}! You are now logged in.</h2>}
    </>
  );
}

export default HomePage;
