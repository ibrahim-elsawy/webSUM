import React from 'react';
import { Main } from './componets/body/indexBody';
import { NavBar } from './componets/navBar/indexNav';
import Global from "./styles/global";

const App: React.FC = () => (
  <>
    <Global/>
    <NavBar></NavBar>
    <Main></Main>
  </>
)

export default App;
