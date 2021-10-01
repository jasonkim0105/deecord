import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DeecordContainer from './deecord/deecord_container';
import ErrorPage from './error/error'
import ModalContainer from './modal/modal';
import CreateServerContainer from './servers/create_server_container'

const App = () => (
  <div>
    <ModalContainer/>

    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <ProtectedRoute path="/channels" component={DeecordContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route component={ErrorPage}/>
    </Switch>
  </div>
);

export default App;