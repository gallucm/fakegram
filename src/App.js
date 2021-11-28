import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { Navbar } from './components/ui/Navbar';
import { Account } from './pages/Account';
import { Login } from './pages/Login';
import { Index } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/p/:id" component={Profile} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navbar>
  )
}
