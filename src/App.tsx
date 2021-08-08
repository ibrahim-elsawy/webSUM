import React from 'react';
import { Main } from './components/body/indexBody';
import { NavBar } from './components/navBar/indexNav';
import Global from "./styles/global";
import { Route, Redirect, Switch, BrowserRouter, useHistory } from "react-router-dom";
import { Signup } from './components/navBar/signup';
import { Login } from './components/navBar/login';

const App: React.FC = () => {
  return (
  <>
    <Global />
    <NavBar History={useHistory()}></NavBar>
      <Switch>
        <Route path="/register">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/main">
          <Main></Main>
        </Route>
        <Redirect to="/main" />
      </Switch>
  </>
  )
}

export default App;
