import React from "react";
import { Link } from "react-router-dom";

const Splash = ({currentUser, logout}) => {

  return (
    <div className="splash">
      <div className="splash-div-1">
        <nav>
          <div className="deecord-title">
            <Link to='/'>Deecord</Link>
          </div>
            <Link to="/login">Login</Link>
        </nav>

        <div className="deecord-explanation-container">
          <div className="deecord-explanation">
            <h1>IMAGINE A PLACE</h1>
            <p>...where you can communicate with your friends, gaming group, or a worldwide art community. Deecord is an app which allows you to hangoug with your friends online, over voice or text.</p>
            <div className='splash-buttons'>
            <a href="https://github.com/jasonkim0105/deecord" className='github'>Github</a>
              {/* <button className='github-button'>Github</button> */}
            <a href="https://www.linkedin.com/in/jason-kim-0105/" className='linkedin'>Linkedin</a>
              {/* <button className='linkedin-button'>Linkedin</button> */}
            </div>
          </div>
        </div>
        <img className='splash1back' src={window.splashwavesbackground}/>
      </div>

    </div>
  )
}
export default Splash;