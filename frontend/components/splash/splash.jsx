import React from "react";
import { Link } from "react-router-dom";

const Splash = (props) => {
  // const sessionLinks = () => <Link to="/login">Login</Link>;

  // const loggedIn = () => <Link to="/channels">Open deecord</Link>;

  // return sessionLinks
  return (
    <div>
      <h1>Deecord</h1>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  )
}
export default Splash;