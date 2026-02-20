import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { userContext } from "../Context/UserProvider";

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
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        {currentUser ? (
          <li>
            <NavLink to="/Contact">Contact</NavLink>{" "}
          </li>
        ) : null}
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
