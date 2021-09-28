import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChannelContainer from './channel/channel_container';

const App = () => (
  <div>
    {/* <SplashContainer/> */}

    <Switch>
      <ProtectedRoute path="/channels" component={ChannelContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={SplashContainer}/>
    </Switch>
  </div>
);

export default App;