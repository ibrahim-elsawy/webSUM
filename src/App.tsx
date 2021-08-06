import React from 'react';
import { Main } from './componets/body/indexBody';
import { NavBar } from './componets/navBar/indexNav';
import Global from "./styles/global";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { Signup } from './componets/navBar/signup';
import { Login } from './componets/navBar/login';

const App: React.FC = () => (
  <>
    <Global/>
    <NavBar></NavBar>
    <BrowserRouter>
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
        <Redirect to="/main"/>
      </Switch>
    </BrowserRouter>
  </>
)

export default App;
