import React from "react";
import { Link } from "react-router-dom";

const Splash = ({currentUser, logout}) => {
  // const sessionLinks = () => <Link to="/login">Login</Link>;

  // const loggedIn = () => <Link to="/channels">Open deecord</Link>;

  // return sessionLinks
  let buttons = null;
  // if (currentUser) {
  //   buttons = (
  //     <div>
  //       <p>{currentUser.username}</p>
  //       <button onClick={() => logout()}>Log Out</button>
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1>Deecord</h1>
      <Link to="/login">Login</Link>
      {/* &nbsp;or&nbsp; */}
      {/* <Link to="/signup">Sign up!</Link> */}
    </div>
    // {buttons}
  )
}
export default Splash;