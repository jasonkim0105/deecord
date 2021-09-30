import React from "react";
import { Link } from "react-router-dom";

const Splash = ({currentUser, logout}) => {
  // const sessionLinks = () => <Link to="/login">Login</Link>;

  // const loggedIn = () => <Link to="/channels">Open deecord</Link>;

  // return sessionLinks

  return (
    <div className="splash">
      <div className="splash-div-1">
        <nav>
          <div className="deecord-title">
            <Link to='/'>Deecord</Link>
          </div>
            <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  )
}
export default Splash;