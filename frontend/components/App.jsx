import React from "react";
import { Route } from "react-router";
// import { AuthRoute } from "../util/route_util";
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>My super awesome app is on it's way</h1>
      <SplashContainer/>
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;