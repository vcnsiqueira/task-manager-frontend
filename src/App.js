import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import { AuthContext } from './context/auth-context';

import Login from './views/Login/Login';
import Boards from './views/Boards/Boards';
import Navigation from './components/Navigation';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Navigation />
        <Switch>
          <Route path="/u1/boards" exact>
            <Boards username='Vinícius' />
          </Route>
          <Redirect to="/u1/boards"/>
        </Switch>
      </>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Redirect to="/"/>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
