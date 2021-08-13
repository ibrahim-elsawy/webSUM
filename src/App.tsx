import React from 'react';
import { Main } from './components/body/indexBody';
import { NavBar } from './components/navBar/indexNav';
import Global from "./styles/global";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { Signup } from './components/navBar/signup';
import { Login } from './components/navBar/login';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
  <>
    <ToastContainer />
    <Global />
    <NavBar History={useHistory()}></NavBar>
      <Switch>
        <Route path="/register">
          <Signup History={useHistory()}></Signup>
        </Route>
        <Route path="/login">
          <Login History={useHistory()}></Login>
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
