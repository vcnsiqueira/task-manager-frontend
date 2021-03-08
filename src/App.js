import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
//import theme from './styles/theme';

import Login from './views/Login/Login';
import Boards from './views/Boards/Boards';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/u1/boards" exact>
          <Boards />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
