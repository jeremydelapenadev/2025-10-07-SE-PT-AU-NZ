/* LAB EXERCISE 4: 

[/] Create an app with 3 different pages: Home, Login and Bitcoin Rates
[/] Use existing components to add content to each page
[/] Include a navbar to navigate between pages */

/* LAB EXERCISE 5:

[ ] Update your solution for Exercise 4 to use MUI components for styling
[ ] Use the AppBar for navigation and MUI form components for any form inputs

[ ] Extension: Include the PostList component and style using MUI cards and grids
[ ] Extension: Try to create a custom theme using createTheme. */


import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { userContext } from "../context/UserProvider";

export default function NavBar() {
  // const { theme } = useContext(MyThemeContext);

  const { currentUser } = useContext(userContext);

  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {currentUser ? (
          <li>
            <NavLink to="/rates">BitCoin Rates</NavLink>
          </li>
        ) : null}
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
